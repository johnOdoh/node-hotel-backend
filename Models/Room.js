import mongoose from 'mongoose'
import { ROOM_STATUS } from '../utils/enums.js'
const schema = mongoose.Schema
// const { ROOM_STATUS } = require('../utils/enums')

const roomSchema = new schema({
    number: {
        type: schema.Types.Int32,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: Object.values(ROOM_STATUS),
            message: '{VALUE} is not supported'
        },
        default: ROOM_STATUS.OPEN
    },
    category: {
        type: schema.Types.ObjectId,
        ref: 'RoomCategory',
        required: true
    }
})

export default mongoose.model('Room', roomSchema)