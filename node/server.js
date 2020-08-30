// Backend
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db');
const FeedbackModel = require('./feedback_schema');

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

    FeedbackModel.create(req.body , (err, doc)=>{
        if (err) res.json({result: "failed", username: username, feedback: feedback});

        res.json({result: "success", username: username, feedback: feedback});
    });

    // res.end("Welcome to my home path");
    // res.end("Test Feedback: " + feedback + "Of User : " + username);
});

app.get('/api', (req, res) => {
    FeedbackModel.find((err, doc) => {
        if (err) { res.json({result: "failed"}) };
        res.json({result: "success", data: doc});
    });
});

app.listen(3000, ()=>{
    console.log("server is running ....");
});