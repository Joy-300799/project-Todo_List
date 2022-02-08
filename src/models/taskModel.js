const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project7_board',
        required: true
    },
    task: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    status: {
        type: String,
        default: 'Todo'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model('project7_Task', taskSchema)