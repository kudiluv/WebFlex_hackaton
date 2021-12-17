const router = require("express").Router();

router.use('/check', require('./check'));
router.use('/auth', require('./auth'));

module.exports = router