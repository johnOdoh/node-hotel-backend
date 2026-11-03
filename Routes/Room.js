import express from 'express'
const router = express.Router()

import RoomController from '../Controllers/RoomController.js'

router.route('/:id')
    .get(RoomController.getRoom)
    .patch(RoomController.updateRoom)
    .delete(RoomController.deleteRoom)

router.route('/')
    .get(RoomController.getRooms)
    .post(RoomController.createRoom)

export default router
