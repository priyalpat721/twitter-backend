const dao = require('./profile-dao');

module.exports = (app) => {

    const findProfileById = (req, res) => {
        dao.findProfileById()
            .then(profile => res.json(profile));
    }

    const updateProfile = (req, res) =>
        dao.updateProfile('6195e88466888af9ff79dd47', req.body)
            .then(status => res.send(status));

    app.get('/rest/profile', findProfileById);
    app.put('/rest/profile/:id', updateProfile);
};