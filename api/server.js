
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
var request = require('request');
var router = express.Router();
 
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sansiri_db'
});
 
// connect to database
mc.connect();
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: '404 Not Found' })
});
 
// Retrieve all Project 
app.get('/project', function (req, res) {
    mc.query('SELECT * FROM project', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Project List.' });
    });
});
 
// Search for Project in their name
app.get('/projects/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    mc.query("SELECT * FROM project WHERE name LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Project Search List.' });
    });
});
 
// Retrieve labor with id 
app.get('/labor/:id', function (req, res) {
 
    let task_id = req.params.id;
  
    mc.query('SELECT * FROM labor where id=?', task_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Labor list.' });
    });
 
});

// Retrieve labor with nationality 
app.get('/labor/:nation', function (req, res) {
 
    let nationality = req.params.nation;
  
    mc.query('SELECT * FROM labor where id=?', nationality, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Labor list.' });
    });
 
});
 //Line Notify
app.get('/line', function(req, res, next) {
    var token = "dLc28rBIIpZqF7XS4V8UZbFdtixb0L8mPfUPDxueh3i";
    var message = "\nรายงานการฉีดวัดซีนสำหรับเด็ก ประจำวันที่ 17/6/61 \n 1.เด็กหญิงสมศรี มีคม\n 2.เด็กหญิงสมศรี2 มีคม";

    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'auth': {
            'bearer': token
        },
        form: {
            message: message
        }
    }, (err, httpResponse, body) => {
        if(err){
            console.log(err);
        } else {
            res.json({
                httpResponse: httpResponse,
                body: body
            });
        }
    });
});

// Add a new data
app.post('/data/step1', function (req, res) {

    mc.query("INSERT INTO project SET ? ", { 
        id : req.body.projectid,
        name : req.body.projectnamethai,
        name_en : req.body.projectnameeng,
        province : req.body.projectprovide,
        start_working : req.body.projectdatestart,
        finish_working : req.body.projectdateend

    }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New data has been created successfully.' });
    });

});
app.post('/data/step2', function (req, res) {

    mc.query("INSERT INTO camp SET ? ", { 
        id : req.body.projectid,
        name : req.body.projectnamethai,
        name_en : req.body.projectnameeng,
        province : req.body.projectprovide,
        start_working : req.body.projectdatestart,
        finish_working : req.body.projectdateend

    }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New data has been created successfully.' });
    });

});
app.post('/data/step3', function (req, res) {

    mc.query("INSERT INTO labor SET ? ", { 
        id : req.body.projectid,
        name : req.body.projectnamethai,
        name_en : req.body.projectnameeng,
        province : req.body.projectprovide,
        start_working : req.body.projectdatestart,
        finish_working : req.body.projectdateend

    }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New data has been created successfully.' });
    });

});
app.post('/data/step4', function (req, res) {

    mc.query("INSERT INTO child SET ? ", { 
        id : req.body.projectid,
        name : req.body.projectnamethai,
        name_en : req.body.projectnameeng,
        province : req.body.projectprovide,
        start_working : req.body.projectdatestart,
        finish_working : req.body.projectdateend

    }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New data has been created successfully.' });
    });

});
 
 
 
// all other requests redirect to 404
app.all("*", function (req, res) {
    return res.status(404).send('page not found')
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
 
// allows "grunt dev" to create a development server with livereload
module.exports = app;
