const express = require('express');

const router = express.Router();
const check_auth=require('../middleware/Check-Auth');

const CreateFormat = require('../models/Create-format');

router.get('/',check_auth, async (req, res) => {
    const createresult = await CreateFormat.find();
    res.json(createresult);
});

router.post('/',check_auth, async (req, res) => {
    try {
        const createresult = await CreateFormat.create({
            year: req.body.year,
            theory: req.body.theory,
            practical: req.body.practical,
            internal1: req.body.internal1,
            internal2: req.body.internal2,
            passingpercent: req.body.passingpercent
        });
        res.json({message:"successfully created format.."});
    } catch (error) {
        res.json({message:'Already Created'}); 
        console.log(error);
    }
});



module.exports = router;

// const formatdata=new CreateFormat({
    //     year: req.body.year,
    //     theory: req.body.theory,
    //     practical: req.body.practical,
    //     internal1: req.body.internal1,
    //     internal2: req.body.internal2,
    //     passingpercent: req.body.passingpercent
    // })
