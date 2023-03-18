const express = require('express');
const { createEvent, viewEvent } = require('../controllers/adminControllers');
const router = express.Router();

router.route('/create_event').post(createEvent);
router.route('/view/event').get(viewEvent);

module.exports = router;