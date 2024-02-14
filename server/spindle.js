require('dotenv').config();

const Endpoint = require("./models/Endpoint.js")
const DocEndpoint = require("./models/DocEndpoint.js")
const API = require("./models/API.js")
const Documentation = require("./models/Documentation.js")
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()
const Company = require("./models/Company.js")


router.use(express.json());





router.get('/docs/:id', async (req, res) => {
    try{
        console.log('hit')
    const id = req.params.id;
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const doc = await Documentation.findById(id)
    .populate({
        path: 'doc_endpoints',
        populate: {
            path: 'endpoint_ref',
            model: 'Endpoint'  // model name for endpoint_ref
        }
    });    console.log(doc)
    console.log("sent doc")
    res.status(200).send(doc);

    }
    catch(err){
        console.log(err)
        res.status(500).send({error: err.message});
    }
}
);






router.get('/:name', async (req, res) => {
    try {
        const name = req.params.name;
        
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const company = await Company.findOne({name})

        
        let company_id = company._id

        const api = await Documentation.find({ company: company_id });
        console.log(api)
        res.status(200).send(api);
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message });
    }
}
);











module.exports = router;