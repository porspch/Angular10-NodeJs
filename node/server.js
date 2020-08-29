// Backend
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/**
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
*/

app.get('/', (req, res) => {
    res.end("Welcome to root path");
});

app.get('/home', (req, res) => {
    res.end("Welcome to my home path");
});

app.post('/api', (req, res) => {
    const username = req.body.username;
    const feedback = req.body.feedback;

    // res.end("Welcome to my home path");

    // res.end("Test Feedback: " + feedback + "Of User : " + username);

    res.json({result: "success", username: username, feedback: feedback});
});

app.listen(3000, ()=>{
    console.log("server is running ....");
});