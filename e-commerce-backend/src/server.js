import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();
const app = express();

const port = process.env.Port || 5000;

app.use(cors({origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})