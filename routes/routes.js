/**
 * Created by Vlad on 20.05.2017.
 */

const apiRoutes = require('./apiRoutes');

module.exports = function (app, viewPath) {

    apiRoutes(app);

    app.get('/', function (req, res) {
        res.sendFile(viewPath+'index.html');
    });
};