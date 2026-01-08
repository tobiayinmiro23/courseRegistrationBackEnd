const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const router= require('./Routes/Index')
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@tobi.z8plmj1.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

const app=express()
// const corsOptions = {
//   origin: ['https://school-portal-zjna.onrender.com','https://tobiayinmiro23.github.io'],
// };
// app.use(cors({credentials: true,corsOptions }));
const allowedOrigins = [
  "https://school-portal-zjna.onrender.com",
  "https://tobiayinmiro23.github.io",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json())
app.use(router)


async function main() {
    await mongoose.connect(uri);
    console.log('successfully connectred to the database')
}

app.listen(process.env.PORT || 3000,()=>main().catch((err) => console.log(err)))


