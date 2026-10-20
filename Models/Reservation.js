const mongoose = require('mongoose')
const schema = mongoose.Schema

const reservationSchema = new schema({
    'room': {
        type: schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    'reference': {
        type: String,
        required: true,
        unique: true
    },
    'name': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'phone': {
        type: String,
        required: true
    },
    'checkIn': {
        type: Date,
        required: true
    },
    'checkOut': {
        type: Date,
        required: true
    },
    'number_of_guests': {
        type: Int32,
        required: true
    },
    'estimated_arrival_time': String,
    'special_request': String,
    'amount': {
        type: Number,
        required: true
    },
    'booking_type': {
        type: String,
        required: true
    },
    'status': {
        type: String,
        required: true
    },
    'booked_by': {
        type: schema.Types.ObjectId,
        'ref': 'User',
        required: true
    },
    'is_completed': {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Reservation', reservationSchema)