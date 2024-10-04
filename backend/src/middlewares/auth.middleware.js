import asyncHandler from 'express-async-handler'
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {

    const token =
      req.cookies?.token
    if (!token) {
        res.status(401).json({error:'Not authorized, no token'})
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decodedToken)
    req.user = {
        id: decodedToken.id,
        type: decodedToken.str
    }
    next();
  } catch (error) {
    res.status(401).json({msg:'Internal Server error'})
  }
});