
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


dotenv.config();

connectDB();

import indexRouter from './routes/indexRoutes.js';
import usersRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRoutes.js';


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/project', projectRouter);

const port =  4000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

export default app;