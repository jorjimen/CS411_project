const passport = require('passport');
const spotify = require('../config/spotify')
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
    new SpotifyStrategy(
        {
            clientID: spotify.CLIENT_ID,
            clientSecret: spotify.CLIENT_SECRET,
            callbackURL: '/auth/spotify/callback'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            console.log("Access Token - " + accessToken);
            console.log("Refresh Token - " + refreshToken);
            console.log("Expires In - " + expires_in);
        }
    )
);

