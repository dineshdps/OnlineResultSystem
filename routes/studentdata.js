const express=require('express');
const router=express.Router();
const StudentData=require('../models/StudentData');

router.post('/', async(req,res) => {
    const studentdata=await StudentData.create({
        firstname:"Akash",
        lastname:"Gupta",
        middlename:"Ramjatan",
        UniqueNo:"1111112",
        PNRNo:"75684546845466",
        rollno:"02",
        Pattern:"Regular",
        semester:"semester6",
        year:"2019"

    });
    res.json(studentdata);

})

module.exports=router;