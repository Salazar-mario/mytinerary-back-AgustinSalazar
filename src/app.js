import'./config/db.js';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import Router from "./router/router.js";


const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(morgan('dev'));
app.use(cors());

app.use('/api', Router) 

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})