const express = require('express');
const { body, validationResult } = require('express-validator');
const Recommendation = require('../models/Recommendation');
const router = express.Router();

router.post(
    '/write-a-recommendation',
    [
        body('name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail()
    ],
    async (req, res) => {

        try {

            //if there are error return bad request and the errors......
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ result: errors.array()[0].msg });
            }

            const newRecommendation = new Recommendation({
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                company: req.body.company,
                designation: req.body.designation,
                recommendationMessage: req.body.recommendationMessage
            });

            const saveRecommendation = await newRecommendation.save();
            console.log(saveRecommendation);
            res.send({ result: true });

        } catch (error) {
            console.log(error);
            res.status(500).send({ result: 'Internal server error' });
        }
    }
);


router.get(
    '/all-recommendations',
    async (req, res) => {
        try {
            const recommendations = await Recommendation.find();
            res.send({recommendations: recommendations, isSuccessfull: true});
            // console.log(recommendations.length);
        } catch (error) {
            console.log(error);
            res.status(500).send({ result: 'Internal server error', isSuccessfull: false });
        }

    }
);

module.exports = router;