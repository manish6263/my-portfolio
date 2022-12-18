const express = require('express');
const { body, validationResult } = require('express-validator');
const Skill = require('../models/Skill');
const router = express.Router();

router.post(
    '/add',
    [
        body('name').isLength({ min: 3 })
    ],
    async (req, res) => {

        try {

            //if there are error return bad request and the errors......
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ result: errors.array()[0].msg });
            }

            const newSkill = new Skill({
                id: req.body.id,
                name: req.body.name,
                imageUrl: req.body.imageUrl,
                starsTotal: req.body.starsTotal,
                starsActive: req.body.starsActive
            });

            const saveSkill = await newSkill.save();
            console.log(saveSkill);
            res.send({ result: true });

        } catch (error) {
            console.log(error);
            res.status(500).send({ result: 'Internal server error' });
        }
    }
);

router.get(
    '/all-skills',
    async (req, res) => {
        try {
            const skills = await Skill.find();
            res.send({skills: skills, isSuccessfull: true});
            // console.log({ skills: skills, isSuccessfull: true });
        } catch (error) {
            console.log('Internal server error');
            res.status(500).send({ result: 'Internal server error', isSuccessfull: false });
        }
    }
);

module.exports = router;