import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import Company from '@/models/Company';

import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

import bcrypt from 'bcryptjs';

 
type ResponseData = {
  message: string
}
 
export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await mongoose.connect(uri || '');
  try{

    let text = await new Response(req.body).text();

    const {name, password} = JSON.parse(text);

   
  
    
      
        const company = await Company.findOne({name});
        if(company){
            return new Response('Company already exists', {status: 400});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newCompany = new Company({name, password: hashedPassword});
        await newCompany.save();
        await mongoose.disconnect();
        return new Response('Company created', {status: 201});
          

      }catch(err){
        return new Response('Error', {status: 500});
      }

  
    
    
   

}

