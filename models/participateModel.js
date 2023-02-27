const mongoose = require('mongoose');

const participateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter the Valid Email"]
    },
    phone: {
        type: Number,
        required: [true, "Please Enter the Phone No"],
        maxLength: [10, "Phone No cannot exceed 10 characters"]
    },
    session: {
        type: String,
        required: [true, "Please Mention Aided or SF"]
    },
    degree: {
        type: String,
        required: [true, "Please Mention UG or PG"]
    },
    event1: {
        type: String,
        required: [true, "Enter the Event"]
    },
    event2: {
        type: String,
        required: [true, "Enter the Event"]
    }
})

let schema = mongoose.model('Participate', participateSchema);

module.exports = schema;