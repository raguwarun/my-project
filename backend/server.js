const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require("./config/keys");
const passport = require("passport");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = keys. mongoURI;
//const uri = "mongodb+srv://admin:admin@clustermongo.8vofs.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true  });
const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log("Connection Established successfully");
});

const exercisesRouter = require('./routes/exercises');
const clientsRouter = require('./routes/clients');
const groupsRouter = require('./routes/groups');
const principalRouter = require('./routes/principals');
const articleRouter = require('./routes/articles');
const employeeRouter = require('./routes/employees');
const usersRouter = require('./routes/users');
const projects = require("./routes/projects");
const tasks = require("./routes/tasks");

//passport Middleware and passport configuration
app.use(passport.initialize());
require("./config/passport")(passport);

app.use('/exercises', exercisesRouter);
app.use('/clients', clientsRouter);
app.use('/groups', groupsRouter);
app.use('/principals', principalRouter);
app.use('/articles', articleRouter);
app.use('/employees', employeeRouter);
app.use('/users', usersRouter);
app.use('/projects', projects);
app.use('/tasks', tasks);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});