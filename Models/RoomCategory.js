import mongoose from 'mongoose'
const schema = mongoose.Schema

const roomCategorySchema = new schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'Category name already exists'],
        trim: true
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
        type: schema.Types.Int32,
        required: true,
        default: 1
    },
    size: {
        type: schema.Types.Double,
        required: true
    }
})

export default mongoose.model('RoomCategory', roomCategorySchema)