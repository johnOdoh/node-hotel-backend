const roomCategoryModel = require('../Models/RoomCategory')

exports.createCategory = async (req, res) => {
    try {
        const roomCategory = new roomCategoryModel(req.body)
        await roomCategory.save()
        res.status(201).json({
            status: 'success',
            message: 'Room category created successfully',
            data: roomCategory
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room category creation failed',
            error: error.message
        })
    }
}

exports.getCategories = async (req, res) => {
    try {
        const roomCategories = await roomCategoryModel.find()
        res.status(200).json({
            status: 'success',
            message: 'Room categories fetched successfully',
            data: roomCategories
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room categories fetching failed',
            error: error.message
        })
    }
}

exports.getCategory = async (req, res) => {
    try {
        const roomCategory = await roomCategoryModel.findById(req.params.id)
        if (!roomCategory) {
            return res.status(404).json({
                status: 'error',
                message: 'Room category not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Room category fetched successfully',
            data: roomCategory
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room category fetching failed',
            error: error.message
        })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const roomCategory = await roomCategoryModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
        if (!roomCategory) {
            return res.status(404).json({
                status: 'error',
                message: 'Room category not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Room category updated successfully',
            data: roomCategory
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room category updating failed',
            error: error.message
        })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        await roomCategoryModel.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            message: 'Room category deleted successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Room category deletion failed',
            error: error.message
        })
    }
}