const express = require('express');
const router = express.Router();
const StudentData = require('../models/StudentData');

router.delete('/:UniqueNo', async (req, res) => {
    try {
        let deletedata = await StudentData.deleteOne({
            UniqueNo: req.params.UniqueNo
        });
        res.json(deletedata);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;