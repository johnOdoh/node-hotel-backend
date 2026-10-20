const mongoose = require('mongoose')
const schema = mongoose.Schema

const roomCategorySchema = new schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'Category name already exists']
    },
    images: {
        type: [],
        required: true
    },
    features: {
        type: [],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
        default: 1
    },
    size: {
        type: schema.Types.Double,
        required: true
    }
})

module.exports = mongoose.model('RoomCategory', roomCategorySchema)