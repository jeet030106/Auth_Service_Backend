const express= require('express');
const bodyParser= require('body-parser');
const apiRoutes= require('./routes/index');
const app= express();
const {PORT}= require('./config/serverConfig');
const UserService = require('./service/user-service');
const user = require('./models/user');
const db = require('./models/index');
const prepareAndStartServer= async()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}

prepareAndStartServer();