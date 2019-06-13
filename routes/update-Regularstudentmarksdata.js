const express=require('express');

const router=express.Router();
const check_auth=require('../middleware/Check-Auth');


const RegularStudentMarks = require('../models/Regularstudentmarks');

router.put('/:UniqueNo',check_auth, async(req,res) => {
try{
    const regulardata=await RegularStudentMarks.findOneAndUpdate({ UniqueNo:req.params.UniqueNo},
        { $set: {
            month: req.body.month,
            year: req.body.year,
            semester: req.body.semester,
            result: req.body.result,
            pattern: req.body.pattern,
            internal1subject1: req.body.internal1subject1,
            internal2subject1: req.body.internal2subject1,
            internal1subject2: req.body.internal1subject2,
            internal2subject2: req.body.internal2subject2,
            internal1subject3: req.body.internal1subject3,
            internal2subject3: req.body.internal2subject3,
            internal1subject4: req.body.internal1subject4,
            internal2subject4: req.body.internal2subject4,
            internal1subject5: req.body.internal1subject5,
            internal2subject5: req.body.internal2subject5,
            theorysubject1: req.body.theorysubject1,
            theorysubject2: req.body.theorysubject2,
            theorysubject3: req.body.theorysubject3,
            theorysubject4: req.body.theorysubject4,
            theorysubject5: req.body.theorysubject5,
            subject1total:req.body.subject1total,
            subject2total:req.body.subject2total,
            subject3total:req.body.subject3total,
            subject4total:req.body.subject4total,
            subject5total:req.body.subject5total,
            practical1:req.body.practical1,
            practical2:req.body.practical2,
            practical3:req.body.practical3,
            practical4:req.body.practical4,
            practical5:req.body.practical5,
            subject1:req.body.subject1,
            subject2:req.body.subject2,
            subject3:req.body.subject3,
            subject4:req.body.subject4,
            subject5:req.body.subject5,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            middlename: req.body.middlename,
            UniqueNo:req.body.UniqueNo,
            PNRno:req.body.PNRno}}
           );
           res.json({message:"successfully updated!!!"});
        }catch(error)
{
    res.json({message:"oopps Retry!!!"})
}

});

module.exports=router;
