const mongoose = require('mongoose')
const schema = mongoose.Schema

const roomSchema = new schema({
    'number': {
        type: Int32,
        required: true,
        unique: true
    },
    'status': {
        type: String,
        required: true
    },
    'category': {
        type: schema.Types.ObjectId,
        ref: 'RoomCategory',
        required: true
    }
})

module.exports = mongoose0.model('Room', roomSchema)