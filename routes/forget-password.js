const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const Register = require('../models/Register');

router.post("/", async (req, res) => {

    try {
        var username = req.body.username;
        var password = req.body.NewPassword;
        console.log(password, username);

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        console.log(hash);

        const forgetdata = await Register.findOneAndUpdate({ username: req.body.username }, {
            $set: {     password: hash }

        })
        res.json(forgetdata);
    }
    catch (error) {
        res.json({ message: "wrong username " });
    }


}
    // else {
    //     res.json({ message: "wrong username " });
    // }
    // })
);
module.exports = router;

    // await Register.findOne({ username: req.body.username }, (err, user) => {
    //     if (err) {
    //         res.json({ message: "wrong username" });
    //     }
    //     else if (user) {
    //         var username = req.body.username;
    //         var password = req.body.NewPassword;
    //         console.log(password, username);

    //         var salt = bcrypt.genSaltSync(10);
    //         var hash = bcrypt.hashSync(password, salt);
    //         console.log(hash);

    //         Register.Update({ username: req.body.username }, {
    //             $set:
    //             { password: hash}
    //         })
    //     }
    //     else {
    //         res.json({ message: "wrong username " });
    //     }

    // });