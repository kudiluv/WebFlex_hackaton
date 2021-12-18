const router = require("express").Router();

router.use('/lectures', require('./lectures'));

module.exports = router