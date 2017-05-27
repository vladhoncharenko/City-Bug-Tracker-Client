/**
 * Created by Vlad on 20.05.2017.
 */
var picDownloader = require('./helpers/pic-downloader');

module.exports = function (app, Bug) {

    app.get('/getResentBugsData', (req, res) => {
        Bug.find().sort({field: 'asc', _id: -1}).limit(14).exec((err, bugs) => {
            if (err) console.log(err);
            res.send(bugs);
        });
    });

    app.get('/getMarkersData', (req, res) => {
        Bug.find({}, function (err, markers) {
            if (err) console.log(err);
            res.send(markers);
        });
    });

    app.get('/getAllBugsData', (req, res) => {
        Bug.find({}, function (err, bugs) {
            if (err) console.log(err);
            res.send(bugs);
        });
    });

    app.post('/getBugData', (req, res) => {
        Bug.findOne({'bugId': req.body.id}, function (err, bug) {
            if (err) console.log(err);
            res.send(bug);
        });
    });

    app.post('/savePic', (req, res) => {
        picDownloader.downloadPic(req.body.src, 'pics/' + req.body.filename, function () {
        }).catch(error => {
            console.log('Error while pic downloading: ' + error);
        });
    });
};