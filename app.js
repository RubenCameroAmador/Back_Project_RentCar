const express = require('express');
const cors=require('cors');
const app = express();


/* middlewares */
app.use(cors());
app.use(express.json());

/* routes */
app.use('/users',require('./src/routes/users'))
app.use('/cars',require('./src/routes/cars'))
app.use('/bills',require('./src/routes/bills'))
app.use('/places',require('./src/routes/places'))
app.use('/reservas',require('./src/routes/reservas'))
module.exports=app;