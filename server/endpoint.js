
const vm = require('node:vm');
const mongoose = require('mongoose');

/**
 * req should have endpoint code
 */

async function run(schema, code, uri, params){
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to db")
        const context = {
        mongoose: mongoose,
        Model:null };

        vm.createContext(context); 

        await vm.runInContext(schema, context);
        
     


        const context_2 = {
            mongoose: mongoose,
            uri: uri,
            Model: context.Model,
            answer: null,
            console: console,
            params: params
        }

        code =code.replace(/(const|let|var) answer/g, "answer");

        

        let code2=`
        async function connect(){
            console.log(Model)
            try{
            ${code}
            }catch(err){
                console.log(err)
            }
            finally{
                console.log("closing connection")
                if(mongoose.connection.readyState === 1){
                var keys = Object.keys(mongoose.connection.models)
                mongoose.deleteModel(keys[keys.length-1]);
                await mongoose.connection.close();
            }
        }
        }
        connect();
        `
        console.log(code2)
        vm.createContext(context_2); // Contextify the object.

        await vm.runInContext(code2, context_2);

        


        return context_2.answer      
    }
        catch(err){
            console.log(err)
            return null
    }
    }

module.exports = run
