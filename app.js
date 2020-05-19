const express = require('express');
var path = require('path');
const app = express();
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/resume.html'));
});

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/', router);



app.listen(process.env.PORT);


