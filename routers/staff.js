const express = require('express');
const { staffEvents, selectEvent1, selectEvent2, unselectEvent1, unselectEvent2, filterselect, update1first, update1second, update1third, update1, update2first, update2second, update2third, update2, finalresult } = require('../controllers/staffControllers');
const router = express.Router();

router.route('/staffevent/:event').get(staffEvents);
router.route('/select/event1/:id').put(selectEvent1);
router.route('/select/event2/:id').put(selectEvent2);
router.route('/unselect/event1/:id').put(unselectEvent1);
router.route('/unselect/event2/:id').put(unselectEvent2);
router.route('/filterevent/:event').get(filterselect);
router.route('/update1first/:id').put(update1first);
router.route('/update1second/:id').put(update1second);
router.route('/update1third/:id').put(update1third);
router.route('/update1/:id').put(update1);
router.route('/update2first/:id').put(update2first);
router.route('/update2second/:id').put(update2second);
router.route('/update2third/:id').put(update2third);
router.route('/update2/:id').put(update2);
router.route('/finalresult/:event').get(finalresult);

module.exports = router;