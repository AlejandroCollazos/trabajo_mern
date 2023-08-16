import express from 'express';
import morgan from 'morgan';
import authRoutes from './rotes/auth.routes.js';
import taskRouter from './rotes/task.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser()); //manjear y acceder de forma mas facil a las cookis 
app.use("/api",authRoutes);
app.use("/api",taskRouter);
export default app;