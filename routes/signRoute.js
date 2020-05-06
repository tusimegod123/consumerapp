const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/customerModel')
const path = require('path');
//Creating a signup route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'))
    // res.send("welcome")
})
//Creating A login route
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'))
})
//Creating a route which has what the customer can do after loging in
router.get('/do', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'details.html'))
})
//Creating a post route that registers the customer and captures the password to be used for loging in
router.post('/signup', async (req, res) => {
    try {
        var user = new User(req.body);
        await User.register(user, req.body.password, (error) => {
            if (error) {
                throw error
            }
            res.redirect('/login')
        })
    } catch (error) {
        // res.status(400).send("unable to save to database");
        console.log(error);

    };
})
/*Creating a post route which directs the customer to either do route(if correct info is)
 or signup page (if wrong info is entered)*/
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/do',
        failureRedirect: '/'
    })
);
module.exports = router;