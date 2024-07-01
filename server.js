const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const router= require('./Routes/Index')
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@tobi.z8plmj1.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

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

app.listen(process.env.PORT || 3000,()=>main().catch((err) => console.log(err)))
