const passport = require('passport');
const spotify = require('../config/spotify')
//const SpotifyStrategy = require('passport-spotify');

const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
    new SpotifyStrategy(
        {
            clientID: spotify.CLIENT_ID,
            clientSecret: spotify.CLIENT_SECRET,
            callbackURL: '/auth/spotify/callback'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            /*
            User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
                return done(err, user);
            });*/
            console.log(accessToken);
        }
    )
);

