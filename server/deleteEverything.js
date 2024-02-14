const mongoose = require('mongoose');
const Documentation = require("./models/Documentation.js")
const Endpoint = require("./models/Endpoint.js")
const API = require("./models/API.js")
const DocEndpoint = require("./models/DocEndpoint.js")

require ('dotenv').config()

//empty all collections
async function deleteEverything() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await Documentation.deleteMany({});
    await Endpoint.deleteMany({});
    await API.deleteMany({});
    await DocEndpoint.deleteMany({});

    await mongoose.connection.close();
}

deleteEverything()