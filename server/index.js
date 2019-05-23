import express from 'express'
import api from './routes/api'

var bodyParser = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api());
app.listen(4000);