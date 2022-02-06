const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    boardName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project7_user',
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model('project7_board', boardSchema)