const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

// MONGODBURI = mongodb://localhost/{db_name}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(() => console.log('error '));




const login= require('./routes/login');
app.use('/login',login);



const registers=require('./routes/register');
app.use('/register',registers);

// Format
const format=require('./routes/create-format');
app.use('/format',format);

// Update format
const updateformat=require('./routes/update-create-format');
app.use('/update',updateformat);

// create subjects
const subjectinfo=require('./routes/subjectdata');
app.use('/Subjectinfo',subjectinfo);

//get subject data
const subjectdata=require('./routes/Get-subjectdata');
app.use('/getsubjectdata',subjectdata);

// get subject info

const subjectinfos=require('./routes/subjectdata');
app.use('/getsubjectformatdata',subjectinfos);


//studentdata insert
const studentinfoinsert=require('./routes/studentdata');
app.use('/studentinfo',studentinfoinsert);

//get student data

const studentdata=require('./routes/Get-studentdata');
app.use('/getstudentdata',studentdata);

//DropStudentMarks
const DropStudentMarks=require('./routes/dropstudentmarks');
app.use('/DropStudentMarks',DropStudentMarks);

//ATKTStudentMarks

const AtktStudentMarks=require('./routes/atktstudentmarks');
app.use('/AtktStudentMarks',AtktStudentMarks);

//RegularStudentMarks
const RegularStudentMarks=require('./routes/regularstudentmarks');
app.use('/RegularStudentMarks',RegularStudentMarks);


//Get-DropStudentMarks
const getDropStudentMarks=require('./routes/get-dropstudentmarks');
app.use('/getDropStudentMarks',getDropStudentMarks);

//Get-ATKTStudentMarks

const getAtktStudentMarks=require('./routes/get-atktstudentmarks');
app.use('/getAtktStudentMarks',getAtktStudentMarks);

//Get-RegularStudentMarks
const getRegularStudentMarks=require('./routes/get-regularstudentmarks');
app.use('/getRegularStudentMarks',getRegularStudentMarks);

//delete student data 
const deletestudentdata=require('./routes/delete-studentdata');
app.use('/deleteStudentdata',deletestudentdata);

//update atkt data 

const updateatktdata=require('./routes/update-Atktstudentmarksdata');
app.use('/updateAtktstudentmarksdata',updateatktdata);

//update regular data 

const updateregulardata=require('./routes/update-Regularstudentmarksdata');
app.use('/updateRegularstudentmarksdata',updateregulardata);

//delete atkt data

const deleteatktdata=require('./routes/delete-atktdata');
app.use('/deleteAtktstudentmarksdata',deleteatktdata);

//delete drop data

const deletedropdata=require('./routes/delete-dropdata');
app.use('/deleteDropstudentmarksdata',deletedropdata);


//forget password
const forgetpassword=require('./routes/forget-password');
app.use('/forgetpassword',forgetpassword);


app.get('/', (req, res) => res.send('Server running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on PORT:'+PORT));