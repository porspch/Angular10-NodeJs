const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Product = require('.././models/product')

mongoose.connect('mongodb://localhost:27017/test', { 
    useNewUrlParser: true 
})

// mongodb
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://porspch:<password>@cluster0.drbcj.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("porspch").collection("test");
//   // perform actions on the collection object
//   client.close();
// });

/** Create Model or Collection mongodb */
// const Animal = mongoose.model('Animal', { name: String});
// const Dog = new Animal({name : 'kokooooooooooo'});
// Dog.save().then(() => console.log("hong hong"));

const products = [{}]

// add some data in collection product
router.post('/products', async (req,res) => {
    const payload = req.body
    const product = new Product(payload)
    await product.save()
    res.status(201).end()
})

// find one product
router.get('/getOneProducts/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product)
})

// findAllProduct
router.get('/getAllProducts', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// update data
// findByIdAndUpdate

// delete data
// findByIdAndDelete
// findOneAndDelete


router.get('/show',function (req,res) {
    res.end("Hi, show api");
})

router.post('/add',function (req,res) {
    res.end("Hi, add api : " + req.body.name);
})

router.delete('/delete/:name',function (req,res) {
    res.end("Hi, delete api : " + req.params.name);
})

module.exports = router;
