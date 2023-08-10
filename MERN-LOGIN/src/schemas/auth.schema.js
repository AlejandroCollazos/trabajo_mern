import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: "User name is a required field"
    }),
    email: z.string({
        required_error: "email address is a  required field"
    }).email({
        message:'invalid email address'
    }),
    password: z.string({
        required_error: 'password is required field'
    }).min(6,{
        message: 'password must be  at  least 6 characters long'
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "email address is a  required field"
    }).email({
        message:'invalid email address'
    }),
    password: z.string({
        required_error: 'password is required field'
    }).min(6,{
        message: 'password must be  at  least 6 characters long'
    })
});