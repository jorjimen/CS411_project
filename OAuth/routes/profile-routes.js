const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else{
        next(); //go onto next middleware
    }
};

router.get('/', authCheck, (req, res) => {
   res.render('profile', { user: req.user });
});

module.exports = router;