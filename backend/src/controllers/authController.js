const passport = require('passport');
const User = require('../models/user');
function register(req, res) {
    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            // send to register again if we get an error
        }
        else {
            passport.authenticate("local")(req, res, () => {
                // send to home or to desired page after successful registration
            })
        }
    })
}

module.exports = {
    register
};
