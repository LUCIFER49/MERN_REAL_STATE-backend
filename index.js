import dotenv from "dotenv";
dotenv.config({path: '../.env'});
import express from "express";
import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});


//API Route from home
app.get('/', (req, res) => {
    res.send("Hello Wold");
})