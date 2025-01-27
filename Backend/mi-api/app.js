
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

connectDB();


import usersRouter from './routes/userRoutes.js';
import commentsRouter from './routes/commentRoutes.js';
import contributionsRouter from './routes/contributionRoutes.js';


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/user', usersRouter);
app.use('/comments', commentsRouter);
app.use('/contributions', contributionsRouter);



export default app;