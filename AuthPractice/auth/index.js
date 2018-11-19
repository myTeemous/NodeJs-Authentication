const express = require('express');
const Joi = require("joi");
const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]{3,30}*$)/).required(),
    password: Joi.string().min(8).required()
})

router.get('/', (req, res) => {
    res.json({
        message: "Hello from auth/index.js"
    });
});

router.post('/signup', (req, res) => {
    const validInput = Joi.validate(req.body, schema);

    res.json(validInput);
});

module.exports = router;