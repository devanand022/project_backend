const express = require('express');
const { reguser, regloginuser, staffloginuser, adminloginuser } = require('../controllers/authControllers');
const router = express.Router();

router.route('/reguser').post(reguser);
router.route('/regloginuser').post(regloginuser);
router.route('/staffloginuser').post(staffloginuser);
router.route('/adminloginuser').post(adminloginuser);

module.exports = router;