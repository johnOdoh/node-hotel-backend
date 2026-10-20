const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'receptionist'
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('User', userSchema);