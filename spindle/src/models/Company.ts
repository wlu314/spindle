import mongoose from 'mongoose'; // Import mongoose library
import bcrypt from 'bcryptjs'; // Import bcrypt library
const Schema = mongoose.Schema; // Create a Schema



const CompanySchema = new Schema({ // Create a UserSchema
    name:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    apis:[
        {
            type:Schema.Types.ObjectId,
            ref:'API'
        }
    ]

});

CompanySchema.methods.matchPassword = async function (enteredPassword: any) {
    return await bcrypt.compare(enteredPassword, this.password);
    }

    
    CompanySchema.methods.matchPassword = async function (enteredPassword: any) {
    return await bcrypt.compare(enteredPassword, this.password);
    }

let CompanyModel = mongoose.models.Company|| mongoose.model('Company', CompanySchema); // Create a User model
export default CompanyModel; // Export the User model
