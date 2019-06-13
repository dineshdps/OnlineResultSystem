const express = require('express');

const router = express.Router();
const check_auth = require('../middleware/Check-Auth');


const CreateFormat = require('../models/Create-format');

router.put("/:year",check_auth,  async (req, res) => {

    try {
        const updateformat=await CreateFormat.findOneAndUpdate(
            { year: req.params.year },{ $set: {year: req.body.year,
                theory: req.body.theory,
                practical: req.body.practical,
                internal1: req.body.internal1,
                internal2: req.body.internal2,
                passingpercent: req.body.passingpercent}}
                 );
        res.json({message:"successfully updated"});
      

    } catch (error) {
        res.json({ message: "cannot update year !!!" });
        console.log(error);
    }
});

module.exports = router;