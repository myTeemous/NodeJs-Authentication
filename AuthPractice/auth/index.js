const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "Hello from auth/index.js"
    });
});

router.post('/signup', (req, res) => {
    console.log('body', req.body);

    res.json({
        message: 'You\'ve signed up!'
    });
});

module.exports = router;