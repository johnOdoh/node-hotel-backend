import express from 'express'
const router = express.Router()

import RoomCategoryController from '../Controllers/RoomCategoryController.js'

router.route('/:id')
    .get(RoomCategoryController.getCategory)
    .patch(RoomCategoryController.updateCategory)
    .delete(RoomCategoryController.deleteCategory)

router.route('/')
    .get(RoomCategoryController.getCategories)
    .post(RoomCategoryController.createCategory)

export default router