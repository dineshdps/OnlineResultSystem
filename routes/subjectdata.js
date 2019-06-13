const express = require('express');

const router = express.Router();

const SubjectFormat=require('../models/Subjectdata');
const check_auth=require('../middleware/Check-Auth');



router.get('/',check_auth, async (req, res) => {
    const subjects = await SubjectFormat.find();
    res.json(subjects);
});

router.post('/', check_auth,async (req, res) => {
    try {
        const subjects = await SubjectFormat.create({
            semester: req.body.semester,
            year: req.body.year,
            subject1: req.body.subject1,
            subject2: req.body.subject2,
            subject3: req.body.subject3,
            subject4: req.body.subject4,
            subject5: req.body.subject5,
            Practical1:req.body.Practical1,
            Practical2:req.body.Practical2,
            Practical3:req.body.Practical3,
            Practical4:req.body.Practical4,
            Practical5:req.body.Practical5
        });
        res.json({message:"successfully created..."});
    } catch (error) {
        console.log(error);
        res.json({message:"Already Created...."});
    }
});

module.exports = router;
