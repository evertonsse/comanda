const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');
const db = require('../dbConfig');


app = express();



app.use(bodyParser.json());
app.use(userRoutes)
app.listen(3333)

