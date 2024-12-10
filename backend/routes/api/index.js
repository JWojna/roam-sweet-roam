//^ backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");

//^ router imports
router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

//! KEEP test route
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

//------ EXPORTS -------//
module.exports = router;
