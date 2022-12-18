const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true
    },
    recommendationMessage: {
        type: String,
        required: true
    },
    onShowcase: {
        type: Boolean,
        default: true
    }
});

const Recommendation = mongoose.model('recommendations', RecommendationSchema);
module.exports = Recommendation;