const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

router.post(
    '/add',
    async (req, res) => {

        try {

            const newProject = new Project({
                id: req.body.id,
                title: req.body.title,
                imageUrl: req.body.imageUrl,
                description: req.body.description,
                body: req.body.body,
                // isPublished: req.body.isPublished,
                // lastModified: req.body.lastModified
            });

            const saveProject = await newProject.save();
            console.log(saveProject);
            res.send({ result: true });

        } catch (error) {
            console.log(error);
            res.status(500).send({ result: 'Internal server error' });
        }
    }
);


router.get(
    '/all-projects',
    async (req, res) => {
        try {
            const projects = await Project.find();
            res.send({ projects: projects, isSuccessfull: true });
            // console.log(projects.length);
        } catch (error) {
            console.log('Internal server error');
            res.status(500).send({ result: 'Internal server error', isSuccessfull: false });
        }
    }
);

module.exports = router;