const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/adminpanel";

const connectDB = async () =>{
    try {
        await mongoose.connect(URL);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;