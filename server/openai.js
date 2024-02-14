require('dotenv').config();
const { Configuration, OpenAI } = require('openai');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const getAPIIdeas = require("./getIdeas.js");
const createEndPoints = require("./createEndpoints.js");
const createDocumentation = require("./createDocumentation.js");
const image_query = require("./getImage.js");
const Company = require("./models/Company.js")

const Endpoint = require("./models/Endpoint.js")
const DocEndpoint = require("./models/DocEndpoint.js")
const API = require("./models/API.js")
const Documentation = require("./models/Documentation.js")


function formatString(input) {
    return input.toLowerCase().replace(/\s/g, '_');
}


const mongoose = require('mongoose');




// Initialize OpenAI API
const openai = new OpenAI(OPENAI_API_KEY);

const express = require('express');
const router = express.Router()


router.use(express.json());

/**
 * Returns JSON for an endpoint
 */
router.post('/generateAPI', async (req, res) => {
     try {
    console.log("generateAPI endpoint has been hit");
    console.log(req.body)
    const query = req.body.query;
    const schema = req.body.schema;
    const mongo_uri = req.body.mongo_uri
    const company_name = req.body.company_name
    const name = req.body.name

    
    if (!query) {
        console.log("No query provided")
        return res.status(400).send({ error: 'No query provided' });
    }
    if (!schema) {
        console.log("No schema provided")
        return res.status(400).send({ error: 'No schema provided' });
    }
    if (!mongo_uri) {
        console.log("No mongo uri provided")
        return res.status(400).send({ error: 'No mongo uri provided' });
    }
    if (!company_name) {
        console.log("No company provided")
        return res.status(400).send({ error: 'No company provided' });
    }
    if (!name) {
        console.log("No name provided")
        return res.status(400).send({ error: 'No name provided' });
    }

    let endpoint_ideas = await getAPIIdeas(schema, query);
    console.log("ideas length: " + endpoint_ideas.length)
    let endpoints = await createEndPoints(endpoint_ideas, schema);
    console.log("endpoints length: " + endpoints.length)
    let doc_endpoints = await createDocumentation(endpoints);
    console.log("doc_endpoints length: " + doc_endpoints.length)

    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    
    //upload each end point to mongo and save refs to array
    const endpoint_ids = []
    for(let endpoint of endpoints){
        let new_endpoint = {
            endpoint:endpoint.endpoint,
            params:endpoint.params,
            code: endpoint.code,
            name: formatString(name)
        }

        let id = await Endpoint.create(new_endpoint)
        endpoint_ids.push(id)
    }

    let company = await Company.findOne({name:company_name})
    if(!company){
        console.log("Company not found")
        throw new Error("Company not found")
    }



    const doc_endpoint_ids = []
    let counter = 0

    console.log(doc_endpoints.length)

    for(let doc_endpoint of doc_endpoints){

    let new_doc_endpoint = {
    endpoint_ref: endpoint_ids[counter],
    name:doc_endpoint.name,
    description: doc_endpoint.api_description,
    params: doc_endpoint.params
    }

        let id = await DocEndpoint.create(new_doc_endpoint)
        doc_endpoint_ids.push(id)
        counter++;

    }

    const newAPI = {
        name: formatString(name),
        company:company,
        mongo_uri:mongo_uri,
        mongo_schema:schema,
        query:query,
        endpoints:endpoint_ids
    }


    const image_url = await image_query("Create an image that has to do with" + name)


    const newDocumentation = {
        name: name,
        api: newAPI._id,
        company: company,
        doc_endpoints: doc_endpoint_ids,
        description: "", 
        image: image_url
    }

    let api_status = await API.create(newAPI)
    let documentation_status = await Documentation.create(newDocumentation)

    res.status(200).send({ success: `API created sucessfully`, id: documentation_status._id });

    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).send({ error: 'Error processing your request' });
    }


});

module.exports = router;
 