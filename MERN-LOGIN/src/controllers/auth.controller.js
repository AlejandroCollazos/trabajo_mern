import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import {createTokenAccess} from '../libs/jwt.js';

export const register = async(req, res)=>{
    //res.send('registrando')
    const {username,password,email}= req.body;

    try {
        const passwordHash=await bcrypt.hash(password,10)

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });
        console.log(newUser);
        const userSave = await newUser.save();
        const token = await createTokenAccess({id:userSave._id});
        res.cookie('token', token);
        res.json({
            status:'success',
            id:userSave._id,
            username:userSave.username,
            email:userSave.email
        }); 


    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
export const login =(req, res)=>{
    res.send('logenado')
}