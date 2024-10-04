import jwt from 'jsonwebtoken';

export const generateToken = (id, str) => {
    return jwt.sign({id,str}, process.env.TOKEN_SECRET, {
        expiresIn: '3d',
    });
};