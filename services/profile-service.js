let profile = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }

    const updateCurrentProfile = (req, res) => {
        profile = req.body;
        res.json(req.body);
    }


    app.get("/api/profile", getCurrentProfile);
    app.put("/api/profile", updateCurrentProfile);
}

