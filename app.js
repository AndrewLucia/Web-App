const express = require('express');
var path = require('path');
const app = express();
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/resume'));
})

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/', router);



app.listen(process.env.PORT);


