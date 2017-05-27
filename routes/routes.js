/**
 * Created by Vlad on 20.05.2017.
 */

const apiRoutes = require('./apiRoutes');

module.exports = function (app, viewPath, Bug) {

    apiRoutes(app, Bug);

    app.get('/', function (req, res) {
        res.sendFile(viewPath+'index.html');
    });

    app.get('/bug/:id*', function (req, res) {
        res.render(viewPath+'bug.ejs', {
            bugId: req.params.id
        });
    });

    app.get('/bugs', function (req, res) {
        res.sendFile(viewPath+'bugs.html');
    });
};