const mongoose = require('mongoose')
const express = require('express');
var bodyParser = require('body-parser');
const PORT = 3000;
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Joy-DB:joy123@cluster0.e8rbz.mongodb.net/TodoList", { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected and running.'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(PORT, function() {
	console.log('Express app running on port ' +PORT)
})