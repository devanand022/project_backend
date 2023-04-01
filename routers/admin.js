const express = require('express');
const { createEvent, viewEvent, viewAllEvent, inactiveEvent, activeEvent, addReguser, getReguser, inactiveReguser, activeReguser, addStaffuser, getStaffuser, activeStaff, inactiveStaff } = require('../controllers/adminControllers');
const router = express.Router();

router.route('/create_event').post(createEvent);
router.route('/view/event').get(viewEvent);
router.route('/view/allevent').get(viewAllEvent);
router.route('/inactive/event/:id').put(inactiveEvent);
router.route('/active/event/:id').put(activeEvent);
router.route('/addreguser').post(addReguser);
router.route('/getreguser').get(getReguser);
router.route('/inactive/reg/:id').put(inactiveReguser);
router.route('/active/reg/:id').put(activeReguser);
router.route('/add/staffuser').post(addStaffuser);
router.route('/getstaffuser').get(getStaffuser);
router.route('/active/staff/:id').put(activeStaff);
router.route('/inactive/staff/:id').put(inactiveStaff);

module.exports = router;