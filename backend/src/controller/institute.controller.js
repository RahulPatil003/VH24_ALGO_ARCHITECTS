import asyncHandler from "express-async-handler";
import { Need } from "../models/need.model.js";
import { Institute } from "../models/institute.model.js";

export const raiseRequest = asyncHandler(async(req,res)=>{
    const {id} = req.user;
    const {items} = req.body;
    console.log(req.body)
    const institute = await  Institute.findById(id)
    if(!institute){
        res.status(404).json({message:"Institute not found"})
    }
    const newItems = await Need.create({
        institute: institute._id,
        items:items,
    })
    res.status(201).json({message:"Request raised successfully",newItems})

})