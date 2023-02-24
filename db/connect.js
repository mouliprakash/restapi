const mongoose = require('mongoose');
//const uri = "mongodb+srv://usermoulip:H8b3iKY10Khdcbaf@cluster0.lbdoqhr.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = (uri) => {
    return mongoose.connect(uri, {
       useNewUrlParser : true,
        useUnifiedTopology: true,
       
    })
}

module.exports = connectDB;