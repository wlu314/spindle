const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const APISchema = new Schema({
    name: {
        required: true,
        type: String

    },
    company : {
        type: ObjectId,
        ref: "Company"
    },
    mongo_uri: {
        required:true,
        type:String
    },
    mongo_schema: {
        required:true,
        type:String
    },
    query:{
        required: false,
        type:String
    },
    endpoints: [
        {
            type :ObjectId,
            ref: 'Endpoint'
        }
    ]
   
});

module.exports = mongoose.model('API', APISchema);