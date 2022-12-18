const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    starsTotal: {
        type: Number,
        required: true,
        default: 5
    },
    starsActive: {
        type: Number,
        required: true
    }
});

const Skill = mongoose.model('skills', SkillSchema);
module.exports = Skill;