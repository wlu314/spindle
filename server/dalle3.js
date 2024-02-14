const { OpenAI } = require("openai");
require ('dotenv').config();
const openai = new OpenAI(process.env.OPENAI_API_KEY);


async function create(prompt){
const response =  await openai.images.generate({ prompt, model:'dall-e-3' });
return response.data[0].url;
}
module.exports = create;  