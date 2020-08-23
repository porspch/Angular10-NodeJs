const express = require('express');
const router = express.Router();

// mongodb
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://porspch:<password>@cluster0.drbcj.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("porspch").collection("test");
  // perform actions on the collection object
  client.close();
});

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
