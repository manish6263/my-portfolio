const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

router.post(
    '/add',
    async (req, res) => {

        try {

            const newBlog = new Blog({
                id: req.body.id,
                title: req.body.title,
                imageUrl: req.body.imageUrl,
                description: req.body.description,
                body: req.body.body,
                // isPublished: req.body.isPublished,
                // lastModified: req.body.lastModified
            });

            const saveBlog = await newBlog.save();
            console.log(saveBlog);
            res.send({ result: true });

        } catch (error) {
            console.log(error);
            res.status(500).send({ result: 'Internal server error' });
        }
    }
);


router.get(
    '/all-blogs',
    async (req, res) => {
        try {
            const blogs = await Blog.find();
            res.send({blogs: blogs, isSuccessfull: true});
            // console.log(blogs.length);
        } catch (error) {
            console.log('Internal server error');
            res.status(500).send({ result: 'Internal server error', isSuccessfull: false });
        }
    }
);

module.exports = router;