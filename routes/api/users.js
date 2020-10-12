const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');
const Property = mongoose.model('Property');
var path = require("path");




//POST new user route (optional, everyone has access)
router.post('/register', auth.optional, (req, res, next) => {
    console.log(req)
    const user = req.body

    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }
    if (user.password !== user.passwordConf) {
        return res.status(422).json({
            errors: {
                password: 'passwords do not match',
            },
        });
    }

    const finalUser = new Users(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
        .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {

    console.log(req.body)
    const user = req.body
    const email = user.email;
    const password = user.password;

    if (!email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if (err) {
            return next(err);
        }

        if (passportUser) {

            const user = passportUser;
            console.log(passportUser);
            user.token = passportUser.generateJWT();
            console.log({ user: user.toAuthJSON() })
            const userId = user.toAuthJSON().token

            res.cookie('Token', userId, {
                maxAge: 900000,

                httpOnly: true,
                // Forces to use https in production
                secure: false
            });
            return res.json(user)
        }
        if (info) {
            console.log(info)
        }




        return status(400).info;
    })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {

    const { payload: { id } } = req;


    return Users.findById(id)
        .then((user) => {
            if (!user) {
                return res.sendStatus(400);
            }

            return res.json({ user: user.toAuthJSON() });

        });
});
router.get("/api/:userId", function (req, res) {
    var userId = req.params.userId
    console.log(req)
    Property.find({
        user_id: userId
    }).then((data) => {
        console.log(data);
        res.json(data);
    })
});


module.exports = router;