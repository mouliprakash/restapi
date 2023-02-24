const Product = require('../models/product');
const getAllProducts = async (req,res) => {
    const {company,name,featured,sort,select} = req.query;
    const queryobj = {};
    let apidata =  Product.find(queryobj);
    if(company){
        queryobj.company = company;
    }
    if(name){
        queryobj.name ={$regex: name, $options: "i"};
    }
    if(featured){
        queryobj.featured = featured;
    }
    if(sort){
        let sortfix = sort.replace(","," ");
        apidata = apidata.sort(sortfix);
    }
    if(select){
        let selectfix = select.split(",").join(" ");
        console.log(selectfix);
        apidata = apidata.select(selectfix);
    }
    
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page-1)*limit;

    apidata=apidata.skip(skip).limit(limit);

    console.log(queryobj);
    const Products = await apidata;
    res.status(200).json({Products});
};

const getAllProductsTesting = async (req,res) => {
    const Products = await Product.find(req.query).select("price");
    res.status(200).json({Products});
};

module.exports = {getAllProducts,getAllProductsTesting};