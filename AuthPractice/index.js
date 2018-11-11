//require dependencies
const express = require('express');
const logger = require('morgan');
const path = require("path");

//require routes
const auth = require('./auth/index.js');

//initialize express app
const app = express();

//middleware used on all/some routes
app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from index.js'
    });
});

app.use('/auth', auth);

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Page Not Found -' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 500;
app.listen(port, () => {
    console.log('Listening on port', port);
});