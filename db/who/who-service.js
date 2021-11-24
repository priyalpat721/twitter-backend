const dao = require('./who-dao');

module.exports = (app) => {

    const findAllWho = (req, res) =>
        dao.findAllWho()
            .then(tweets => res.json(tweets));

    app.get('/rest/who/', findAllWho);
};