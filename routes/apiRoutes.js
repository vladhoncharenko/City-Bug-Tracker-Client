/**
 * Created by Vlad on 20.05.2017.
 */

module.exports = function (app, Bug) {

    app.get('/getResentBugsData', (req, res) => {
       res.send(bugsData);
    });

    app.get('/getMarkersData', (req, res) => {
        Bug.find({}, function(err, users) {
            if (err) console.log(err);
            res.send(users);
        });
    });
};