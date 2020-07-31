const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/mydb";

mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true  });
const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log("Connection Established successfully");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const groupsRouter = require('./routes/groups');
const principalRouter = require('./routes/principals');
const articleRouter = require('./routes/articles');
const employeeRouter = require('./routes/employees');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/groups', groupsRouter);
app.use('/principals', principalRouter);
app.use('/articles', articleRouter);
app.use('/employees', employeeRouter);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});