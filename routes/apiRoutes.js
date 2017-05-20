/**
 * Created by Vlad on 20.05.2017.
 */

module.exports = function (app) {

    app.get('/api', (req, res) => {
        console.log(req.body);
    });
};