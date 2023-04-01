const express = require('express');
const { reguser, regloginuser } = require('../controllers/authControllers');
const router = express.Router();

router.route('/reguser').post(reguser);
router.route('/regloginuser').post(regloginuser);

module.exports = router;