const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname,'dist/porspch')));

/**
app.get('/api/test',function (req, res) {
    res.end("Hi, api");
})
*/

app.use('*',function (req, res) {
    // res.end("Hi, api");
    res.sendFile(path.join(path.join(__dirname,'index.html')));
})

const server = app.listen(8081,function () {
    const port = server.address().port;
    console.log("Server is runnning.. at port: %s",port);
});