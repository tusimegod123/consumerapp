const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const passport = require('passport')
const User = require('./models/customerModel')

const signRoute = require('./routes/signRoute')
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use('/', signRoute)
app.use('/login',signRoute)


passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


mongoose.connect("mongodb://localhost:27017/ConsumerApp", { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
        if (err) throw err;
        console.log('Successfully connected');

    });

app.listen(4000, () => {
    console.log("App Listening at port 4000");

})