const express = require('express');
const cors=require('cors');
const app = express();


/* middlewares */
app.use(cors());
app.use(express.json());

/* routes */
app.use('/users',require('./src/routes/users'))
module.exports=app;