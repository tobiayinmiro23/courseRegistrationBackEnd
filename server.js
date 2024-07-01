const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const router= require('./Routes/Index')
// const uri ='mongodb://127.0.0.1:27017/CourseRegistration'
const uri = "mongodb+srv://tobi:Collinss23@tobi.z8plmj1.mongodb.net/CourseRegistration?retryWrites=true&w=majority";

const app=express()
const corsOptions = {
    origin:'http://localhost:3001',
    credentials: true
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(router)


async function main() {
    await mongoose.connect(uri);
    console.log('successfully connectred to the database')
}

app.listen(3000,()=>main().catch((err) => console.log(err)))