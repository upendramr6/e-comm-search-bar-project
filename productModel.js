const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm");

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:String
})

module.exports = mongoose.model('products',productSchema);