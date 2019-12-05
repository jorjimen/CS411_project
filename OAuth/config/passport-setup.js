const passport = require('passport');
const spotify = require('../config/spotify')
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('../models/user-model');

//user to cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//cookie to user
passport.deserializeUser((id, done) => {
    User.findById(id).then((user)=>{
        done(null, user);
    });
});

passport.use(
    new SpotifyStrategy(
        {
            clientID: spotify.CLIENT_ID,
            clientSecret: spotify.CLIENT_SECRET,
            callbackURL: '/auth/spotify/callback'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            //check if user already exists in db
            User.findOne({spotifyId: profile.id}).then((currentUser) =>{
               if(currentUser){
                   //user already exists
                   currentUser.accessToken = accessToken;
                   currentUser.refreshToken = refreshToken;
                   currentUser.save();
                   console.log('Authorization Tokens refreshed for ' + currentUser);
                   done(null, currentUser);
               } else{
                   //if not, create user
                   new User({
                       username: profile.displayName,
                       spotifyId: profile.id,
                       accessToken: accessToken,
                       refreshToken: refreshToken
                   }).save().then((newUser) => {
                       console.log('New User Created: ' + newUser);
                       done(null, newUser);
                   });
               }
            });

            //then makes it so function fires after save finishes
        }
    )
);

