const express = require('express');
const router = express.Router();
const DropStudentMarks = require('../models/Dropstudentmarks');


router.delete('/:UniqueNo', async (req, res) => {
    try {
        let deletedata = await DropStudentMarks.deleteOne({
            UniqueNo: req.params.UniqueNo
        });
        res.json(deletedata);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;