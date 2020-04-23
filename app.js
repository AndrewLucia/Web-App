const express = require('express');
var path = require('path');
const app = express();
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile('public/index.html');
});

router.get('/resume', function(req, res) {
    res.sendFile('public/resume');
})

app.use('/js', express.static('/js'));
app.use('/css', express.static('/css'));
app.use('/', router);



app.listen(process.env.PORT);


