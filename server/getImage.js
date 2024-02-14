require('dotenv').config();
const aws = require('aws-sdk');
const create = require("./dalle3.js");
const axios = require('axios');
const qs = require('qs');


const img = process.env.IMG;



async function image_query(input) {

    const url = await create(input);


    const response = await axios.post("https://api.imgbb.com/1/upload", qs.stringify({
        image: url,
        key:img
    })
    ,
    {
         headers: { 'content-type': 'application/x-www-form-urlencoded' },

    })




    return response.data.data.url;






}


module.exports = image_query;

