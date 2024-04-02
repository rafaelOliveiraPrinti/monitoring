const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

app.use(cors({origin:'*'}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://printi:4OXkaXwE8wGRv8Ag@printimonitoring.w7umi2d.mongodb.net/?retryWrites=true&w=majority&appName=PrintiMonitoring' || '').then((response) => {
  console.log('Mongo connected');
}).catch((e) => {
  console.log(e);
});

app.listen(8888, () => {
  console.log("Server is open.");
});