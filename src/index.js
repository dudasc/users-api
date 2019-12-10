var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const indexRoutes = require('./routes/index');
app.use('/api', indexRoutes);

var port = 9090;
app.listen(port, () => { console.log(`Running API on localhost:${port}`); });