const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');
const db = require('../dbConfig');
const cors = require('cors');


app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes)
app.listen(3333)

