const express = require('express');
const router = express.Router();
const middleware = require('../middleware/auth')
const userController = require('../controller/userController')
const boardController = require('../controller/boardController')
const todoController = require('../controller/todoController')

//User's APIs -> Sign up, Login and Enter OTP.
router.post('/SignUp', userController.signUp)
router.post('/login', userController.login)
router.post('/enterOtp', userController.enterOtp)

//Board's APIs -> Create board, Fetch Board by its Id, Update Board and delete Board.
router.post('/board/:userId', middleware.userAuth, boardController.createBoard)
router.get('/board/:boardId', middleware.userAuth, boardController.getboardById)
router.put('/board/:boardId', middleware.userAuth, boardController.updateBoard)
router.delete('/board/:boardId', middleware.userAuth, boardController.deleteBoardById)

//Task's APIs -> Create task, fetch Task By Id, Update the task and delete task.
router.post('/board/:boardId/task', middleware.userAuth, todoController.createTask)
router.get('/board/:boardId/task/:taskId', middleware.userAuth, todoController.getTaskById)
router.put('/board/:boardId/task/:taskId', middleware.userAuth, todoController.updateTask)
router.delete('/board/:boardId/task/:taskId', middleware.userAuth, todoController.deleteTaskById)

module.exports = router
