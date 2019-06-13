const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

const Register = require('../models/Register');

router.post("/", async (req, res, next) => {
    await Register.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            res.json({ message: "wrong username" });
        }
        else if (user) {
            var userdata = user.password;
            console.log(userdata);
            if (bcrypt.compareSync(req.body.password, userdata)) {
                const token = jwt.sign({ userid: user._id }, "should_be_kept_secret", { expiresIn: '1h' });
                res.json({ token: token,firstname: user.firstName,middlename: user.middleName,lastname: user.lastName });
            } else {
                res.json({ message: "wrong password " });
            }
        }
        else {
            res.json({ message: "wrong username " });
        }
    })
});
module.exports = router;





    // {
    //     if (err) {
    //         next(err);
    //     } else {
    //         var userdata = user.password;
    //         console.log(userdata);
    //         if (bcrypt.compareSync(req.body.password, userdata)) {
    //             const token = jwt.sign({ userid: user._id }, "should_be_kept_secret", { expiresIn: '1h' });
    //             res.json({ token: token });
    //         } else {
    //             res.json({ message: "wrong password" });
    //         }
    //     }
    // }