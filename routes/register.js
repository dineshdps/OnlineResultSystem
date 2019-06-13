const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const Register = require('../models/Register');

router.post('/', async (req, res) => {
    try {
        var passworddata = req.body.password;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(passworddata, salt);

        const registers = await Register.create({
            firstName: req.body.firstName, lastName: req.body.lastName, middleName: req.body.middleName,
            username: req.body.username, password: hash
        });

        res.json({message:"successfully register!!!"});
    } catch (error) {
        console.log(error);
        res.json({message:"username already exits !!!"});
    }



})

module.exports = router;

   // bcrypt.hash(req.body.password, 10).
    //     then(hash=> { const registers =  Register.create({
    //         firstName: req.body.firstName, lastName: req.body.lastName, middleName: req.body.middleName,
    //         username: req.body.username, password: hash
    //     });

    //     res.json(registers);

    //     }) ;