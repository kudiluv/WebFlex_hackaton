const router = require("express").Router();

router.use('/search', require('./search'));
router.use('/', require('./lecture'));

module.exports = router