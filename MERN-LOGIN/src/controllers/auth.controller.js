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
        res.status(201).json({
            id:userSave._id,
            username:userSave.username,
            email:userSave.email
        }); 


    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const login = async (req, res)=>{
    //console.log(req.body)
    const { email, password }= req.body;
    try {
        const userFound = await User.findOne({email});
        if(!userFound) return res.status(400).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch)
        return res.status(400).json({message: "Errror in credential"});

        const token = await createTokenAccess({id: userFound._id});
        res.cookie('token', token)
        res.status(201).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const logout =(req, res)=>{
    res.cookie('token','',{
        expire: new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async(req, res)=>{
    //res.send('profile');
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({message: "User no found"});

    res.status(201).json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    })
}