const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('contact', ContactSchema);
module.exports = Contact;