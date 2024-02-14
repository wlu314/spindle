const ChatOpenAI = require("@langchain/openai").ChatOpenAI;
const JsonOutputFunctionsParser = require("langchain/output_parsers").JsonOutputFunctionsParser;
const HumanMessage = require("@langchain/core/messages").HumanMessage;
const dotenv= require('dotenv')

dotenv.config()

// Instantiate the parser
const parser = new JsonOutputFunctionsParser();


const gpt_model = process.env.GPT_MODEL


// Define the function schema
const extractionFunctionSchema = {
  name: "docendpointcreator",
  description: "Creates documentation object for API Endpoint from given API specification. This includes the API endpoint, Mongo code, and parameters.",
  parameters: {
    type: "object",
    properties: {
        name: {
            type: "string",
            description: "Title of the endpoint such as Get Weather."
        },
        api_description: {
            type: "string",
            description: "This should be a high level description of the functions of the API."
        },
      endpoint: {
        type: "string",
        description: "The API endpoint path, such as api/get/weather",
      },
      tags: {
        type: "array",
        items: {
            type: "string",
            description:"One word tags that describe the endpoint, such as weather."
            
        }
      },
      params:{
        type:"array",
        items: {
            type: "object",
            properties :{
                name: {
                    type:"string",
                    description:"Name of the parameter."
                },
                type:{
                    type:"string",
                    description:"The type of the parameter. Can be string, number, boolean, or array."
                }, 
                description: {
                    type:"string",
                    description:"This shortly describes the use case of the parameter for this function."
                }
            }
         }
      }
    },

    required: ["name", "endpoint", "tags", "params", "api_description"],
  },
};

// Instantiate the ChatOpenAI class
const model = new ChatOpenAI({ modelName: gpt_model, maxTokens:3000});

// Create a new runnable, bind the function to the model, and pipe the output through the parser
const runnable = model
  .bind({
    functions: [extractionFunctionSchema],
    function_call: { name: "docendpointcreator" },
  })
  .pipe(parser);


async function createDocEndpoint(endpoint){
    try{
const result = await runnable.invoke([
  new HumanMessage(`Create a documentation object for the endpoint from this API with this specification: 
  This is the endpoint ${endpoint.endpoint}.
  These are the parameters ${endpoint.params.toString()}.
  These are the parameters ${endpoint.code}.
  
    `)
]
);

return result;

    } catch(e){
      console.log(e)
        return null;
    }

}



async function createDocEndPoints(endpoints){
    let returnArr =[]
    for(let endpoint of endpoints){
      console.log(endpoint)
      console.log('done in create doc endpoints')
        let new_endpoint = await createDocEndpoint(endpoint)
        if(new_endpoint){
            returnArr.push(new_endpoint)
            console.log("pushed")
        }
    }

    return returnArr;
}



module.exports = createDocEndPoints