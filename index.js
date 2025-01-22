const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoutes');
const ChatRoute = require('./routes/chatRoute');
require('dotenv').config();


const App = express();
App.use(express.json())
App.use('/', authRoute)
App.use('/', ChatRoute)


mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        App.listen(5000, () => console.log('Db Connected and Server started'))
    })
    .catch((err) => {
        console.log(err, 'error')
    })