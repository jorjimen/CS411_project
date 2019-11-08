const express = require('express');
const passport = require('passport');
const router = express.Router();

//auth login
router.get('/login', (req, res) =>{
    res.render('login');

});

//auth logout
router.get('/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
})

//auth spotify
router.get('/spotify', passport.authenticate('spotify', {
    scope: ['playlist-modify-public', 'user-read-private', 'user-follow-read', 'playlist-read-private', 'user-top-read']
    }
), function(req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
});


//auth spotify callback
router.get('/spotify/callback', passport.authenticate('spotify'), (req, res) => {
    res.send('Login Successful!');
});


module.exports = router;