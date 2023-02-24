require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get("/", (req,res) => {
    res.send("Hi I am live");
});

//middleware or to set router

app.use("/api/products",products_routes);

const start = async () => {
    try {
        await connectDB("mongodb+srv://usermoulip:H8b3iKY10Khdcbaf@cluster0.lbdoqhr.mongodb.net/Cluster0?retryWrites=true&w=majority");
        app.listen(PORT, () => {
           console.log(`${PORT} Yes I am Connected`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();