import Room from "../Models/Room.js"

const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find()
        res.status(200).json({
            status: 'success',
            message: 'Rooms fetched successfully',
            data: rooms
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Rooms fetching failed',
            error: error.message
        })
    }
}

const getRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id)
        if (!room) {
            return res.status(404).json({
                status: 'error',
                message: 'Room not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Room fetched successfully',
            data: room
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room fetching failed',
            error: error.message
        })
    }
}

const createRoom = async (req, res) => {
    try {
        const room = new Room(req.body)
        await room.save()
        res.status(201).json({
            status: 'success',
            message: 'Room created successfully',
            data: room
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room creation failed',
            error: error.message
        })
    }
}

const updateRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true })
        if (!room) {
            return res.status(404).json({
                status: 'error',
                message: 'Room not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Room updated successfully',
            data: room
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room updating failed',
            error: error.message
        })
    }
}

const deleteRoom = async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            message: 'Room deleted successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room deletion failed',
            error: error.message
        })
    }
}

export default { getRooms, getRoom, createRoom, updateRoom, deleteRoom }