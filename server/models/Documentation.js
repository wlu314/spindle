const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const DocSchema = new Schema({
    name: {
        required: true,
        type: String

    },
    api:{
        type:ObjectId,
        ref:'API'
    },
    company : {
        type: ObjectId,
        ref:'Company'
    },
   
    doc_endpoints: [
        {
            type :ObjectId,
            ref: 'DocEndpoint'
        }
    ],
    description: {
        type: String

    },
    image :{
        type:String
    }
   
});

module.exports = mongoose.model('Documentation', DocSchema);