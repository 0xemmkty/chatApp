const mongoose = require("mongoose");
require("dotenv").config({path : "backend/utills/.env"});



function connectDB() {
  mongoose
    .connect('mongodb+srv://2733224120:Aa1051520520@cluster0.ynv1fdo.mongodb.net/chatApp?retryWrites=true&w=majority')
    
    .then(() => console.log("DB_CONNECTED"))
    .catch((err) => console.log(`err ${err.message}`));
}


module.exports = connectDB