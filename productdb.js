require("dotenv").config();
const connectDB = require('./db/connect');
const product = require("./models/product");
const Product = require('./models/product');

const productjson = require("./products.json");

const start = async () => {
    try{
        await connectDB("mongodb+srv://usermoulip:H8b3iKY10Khdcbaf@cluster0.lbdoqhr.mongodb.net/Cluster0?retryWrites=true&w=majority");
        await product.deleteMany();
        await Product.create(productjson);
        console.log("success")
    }catch (err){
        console.log(err);
    }
};

start();