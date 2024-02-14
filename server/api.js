require('dotenv').config();

const Endpoint = require("./models/Endpoint.js")
const API = require("./models/API.js")
const mongoose = require('mongoose');

const express = require('express');
const router = express.Router()

const run = require("./endpoint.js")


router.use(express.json());



router.use('/', async (req, res) => {
    //if not post request  return 400
    if (req.method !== 'POST') {
        return res.status(400).send({ error: 'Invalid request' });
    }
      const pathPrefix = req.originalUrl;
      console.log(pathPrefix)
    var params = req.body;

          

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    let endpoint = await Endpoint.findOne({endpoint: pathPrefix});
    if (!endpoint) {
        return res.status(404).send({ error: 'Endpoint not found' });
    }
    const code = endpoint.code;
    const name = endpoint.name;
    const params_needed = endpoint.params;

    console.log(params_needed)
    console.log(params)

    //check if all params are present
    for (let i = 0; i < params_needed.length; i++) {
        if (!params[params_needed[i]['name']]) {
            return res.status(400).send({ error: 'Invalid request' });
        }
    }


    //find api from name
    let api = await API.findOne({name: name});

    if (!api) {
        return res.status(404).send({ error: 'API not found' });
    }
    const uri = api.mongo_uri;
    const schema = api.mongo_schema;

    //close connection
    await mongoose.connection.close();

    //for params, if type is number, convert to number
    for (let i = 0; i < params_needed.length; i++) {
        if (params_needed[i]['type'].toLowerCase() === 'number') {
            params[params_needed[i]['name']] = Number(params[params_needed[i]['name']]);
        }
         if (params_needed[i]['type'].toLowerCase() === 'boolean') {
            params[params_needed[i]['name']] = Boolean(params[params_needed[i]['name']]);
        }
    }


    let answer = await run(schema, code, uri, params);

    if (!answer) {
        return res.status(500).send({ error: 'Internal server error' });
    }
    return res.status(200).send({ answer: answer });






});








module.exports = router;