const ChatOpenAI = require("@langchain/openai").ChatOpenAI;
const JsonOutputFunctionsParser = require("langchain/output_parsers").JsonOutputFunctionsParser;
const HumanMessage = require("@langchain/core/messages").HumanMessage;
const dotenv= require('dotenv')

dotenv.config()

const gpt_model = process.env.GPT_MODEL


// Instantiate the parser
const parser = new JsonOutputFunctionsParser();


// Define the function schema
const extractionFunctionSchema = {
  name: "endpointcreator",
  description: "Creates API Endpoint Functionality From API Idea and Mongoose Schema. Can only create POST APIs that read from the database. It cannot create APIs that write to the database.",
  parameters: {
    type: "object",
    properties: {
      endpoint: {
        type: "string",
        description: "The API endpoint path",
      },
      code: {
        type: "string",
        description: "The NodeJS code for the inner logic of the API. This only includes the Mongoose Query, you can assume the Express wrapper is already made. You cannot use the response or requests objects. Refer to parameters as part of the params JSON. The final output is saved as the variable called answer, which already exists, so don't redeclare. You may assume the code will be inside of an async function, so you can use the await keyword. Refer to the Mongoose model as Model.",
      },
      params:{
        type:"array",
        items: {
            type: "object",
            properties :{
                name: {
                    type:"string",
                    description:"Name of the parameter. Must match exactly the name of the parameter in the code."
                },
                type:{
                    type:"string",
                    description:"The type of the parameter. Can be string, number, boolean, or array."
                }
            }
         },
        description: "array of the parameters names and types",


      }
    },
    required: ["endpoint", "code", "params"],
  },
};

// Instantiate the ChatOpenAI class
const model = new ChatOpenAI({ modelName: gpt_model, maxTokens:2500, temperature:1.07});

// Create a new runnable, bind the function to the model, and pipe the output through the parser
const runnable = model
  .bind({
    functions: [extractionFunctionSchema],
    function_call: { name: "endpointcreator" },
  })
  .pipe(parser);


async function createEndpoint(endpoint, schema){
    try{
const result = await runnable.invoke([
  new HumanMessage(`Create an API from this API idea : 
  ${endpoint}
    This is the schema: 
    ${schema}
    `)

    
]
);
return result

    } catch(e){
        console.log("error hit")
        return null;
    }

}

async function createEndpoints(endpoints, schema){
    const returnArr = []

    for(let endpoint of endpoints){
        console.log('done in create endpoints')
        let new_endpoint = await createEndpoint(endpoint, schema)
        if(new_endpoint){
            returnArr.push(new_endpoint)
        }
    }

    return returnArr
}




module.exports = createEndpoints


/**
{
  result: {
    tone: 'positive',
    word_count: 4,
    chat_response: "Indeed, it's a lovely day!"
  }
}
 */