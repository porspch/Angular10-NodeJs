const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.get('/api/test',function (req, res) {
    res.end("Hi, api");
})

const server = app.listen(8081,function () {
    const port = server.address().port;
    console.log("Server is runnning.. at port: %s",port);
});