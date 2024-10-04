import asyncHandler from 'express-async-handler'
import {Institute} from '../../models/institute.model.js'
import bcryptjs from 'bcryptjs'
import { generateToken } from '../../utils/generateToken.js'
import { Location } from '../../models/location.model.js'
export const instituteSignUp = asyncHandler(async(req,res)=>{
    try {
        const {name,type,email,password,phNo,location} = req.body;
        console.log(req.body);
        const existingUser =  await Institute.findOne({email})
        if(existingUser){
            return res.status(400).json({msg:"user Already Exists"})
        }
        const hashedPassword = await bcryptjs.hash(password,10)
        const newLocation =  Location.create({
            address:location.address,
            pincode:location.pincode,
            longitude:location.longitude,
            latitude:location.latitude
        })
        const user = await Institute.create({
            name,
            type,
            email,
            password:hashedPassword,
            phNo,
            location: newLocation._id
        })
        if(!user){
            return res.status(500).json({msg:"Error in creating an account"})
        }
        const token =  generateToken(user._id,"institute")
        return res.status(201).cookie('token',token,{httpOnly:true, secure:true}).json({msg:"Signup successfull"})

    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error ")
    }
})