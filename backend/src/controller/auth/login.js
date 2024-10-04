import asyncHandler from 'express-async-handler'
import {Donor} from '../../models/donor.model.js'
import {ApiError} from '../../utils/ApiError.js'
import {ApiResponse} from '../../utils/ApiResponse.js'
import bcryptjs from 'bcryptjs'
import { generateToken } from '../../utils/generateToken.js'
import { Supplier } from '../../models/supplier.model.js'
import { Institute } from '../../models/institute.model.js'

export const login = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    console.log(req.body, req.type)
    let user;
    if(req.type=='donor'){
        user = await Donor.findOne({email});
    }
    if(req.type == 'institute'){
        user = await Institute.findOne({email});
    }
    if(req.type== 'supplier'){
        user = await Supplier.findOne({email});
    }
    if(!user){
        return res.status(404).json({msg:"User Does Not Exists"})
    }
    console.log(user)
    if(!email || !password) {
        res.status(400).json({msg:"some fields are missing"})
    }
    if(bcryptjs.compare(user.password,password)){
        const token = generateToken(user._id,req.type)
        return res.status(200).clearCookie("token").cookie('token',token,{httpOnly:true, secure:true}).json({msg:"LogIn Successful"})
    }
    return res.status(500).json({msg:"Something went wrong"})
})

