const mongoose = require('mongoose')
const express = require('express');
var bodyParser = require('body-parser');
const PORT = 3000;
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/Joy_Bhattacharya-DB?authSource=admin&replicaSet=atlas-wwe75z-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected and running.'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(PORT, function() {
	console.log('Express app running on port ' +PORT)
})