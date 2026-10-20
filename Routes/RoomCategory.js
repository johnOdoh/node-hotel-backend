const router = require('express').Router()

const RoomCategoryController = require('../Controllers/RoomCategoryController')

router.route('/:id')
    .get(RoomCategoryController.getCategory)
    .patch(RoomCategoryController.updateCategory)
    .delete(RoomCategoryController.deleteCategory)

router.route('/')
    .get(RoomCategoryController.getCategories)
    .post(RoomCategoryController.createCategory)

module.exports = router