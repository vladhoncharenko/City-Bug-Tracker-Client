/**
 * Created by Vlad on 20.05.2017.
 */

let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let path = require('path');
let viewPath =path.join(__dirname, 'app/views/');
//let configDB = require('./config/database.js');

//mongoose.connect(configDB.url);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'app/')));
app.use('/node_modules', express.static(__dirname + '/node_modules/angular'));
require('./routes/routes.js')(app, viewPath);

http.listen(app.get('port'), function () {
    console.log('listening on *:' + app.get('port'));
});