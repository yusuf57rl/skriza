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
                // Authentication successful, redirect to a protected route
            })
        }
    })
}

function login(req, res) {
    passport.authenticate('local', (err, user) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else if (!user) {
            // User authentication failed
            // send to login page again saying user does not exist or something like that
        } else {
            req.login(user, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    // Authentication successful, redirect to a protected route
                }
            });
        }
    })(req, res);
}

module.exports = {
    register,
    login,
};
