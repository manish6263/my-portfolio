const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const router = express.Router();

router.post(
    '/',
    [
    //     body('name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail()
    ],
    async (req, res) => {

        try {

            //if there are error return bad request and the errors......
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ result: errors.array()[0].msg });
            }

            const newContact = new Contact({
                name: req.body.name,
                email: req.body.email,
                description: req.body.description
            });

            const saveContact = await newContact.save();
            console.log(saveContact);
            res.send({ result: true });

        } catch (error) {
            console.log(error);
            res.status(500).send({result: 'Internal server error'});
        }
    });

module.exports = router;