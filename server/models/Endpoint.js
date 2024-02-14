const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const EndpointSchema = new Schema({
    endpoint:
        {
            type: String
        }, 
    params: 
        [{
            type: Object
        }],
        code: {
            type: String
        },
        name: {
            type: String
        }
      
   
});

module.exports = mongoose.model('Endpoint', EndpointSchema);