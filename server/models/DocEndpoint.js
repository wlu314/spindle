const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const DocEndpointSchema = new Schema({
    endpoint_ref:
        {
            type: ObjectId,
            ref:'Endpoint'
        }, 
        endpoint:{
            type:String
        },

        name:{
            type:String
        },
        description:{
            type:String

        },
    params: 
        [{
            type: Object
        }]
});

module.exports = mongoose.model('DocEndpoint', DocEndpointSchema);