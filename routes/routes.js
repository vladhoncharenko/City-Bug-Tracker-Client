/**
 * Created by Vlad on 20.05.2017.
 */

const apiRoutes = require('./apiRoutes');

module.exports = function (app) {

    apiRoutes(app);

    app.get('/', function (req, res) {
      console.log(req.body);
    });
};