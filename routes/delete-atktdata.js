const express = require('express');
const router = express.Router();
const ATKTStudentMarks = require('../models/ATKTstudentmarks');

router.delete('/:UniqueNo', async (req, res) => {
    try {
        let deletedata = await ATKTStudentMarks.deleteOne({
            UniqueNo: req.params.UniqueNo
        });
         res.json(deletedata);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;