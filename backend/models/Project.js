const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('projects', ProjectSchema);
module.exports = Project;