const express = require('express');
const { createCollege, createParticipates, viewColleges, viewParticipates, viewVerifiedColleges, viewUnVerifiedColleges, singleCollege, singleParticipate, editParticipate, verifyCollege, unVerifyCollege, verifyParticipate, unVerifyParticipate, delCol, delParticipate, delSingleParticipate } = require('../controllers/regControllers');
const router = express.Router();

router.route('/college').post(createCollege);
router.route('/participate').post(createParticipates);
router.route('/view/colleges').get(viewColleges);
router.route('/view/participates').get(viewParticipates);
router.route('/view/colleges/verified').get(viewVerifiedColleges);
router.route('/view/colleges/unverified').get(viewUnVerifiedColleges);
router.route('/view/singlecollege/:id').get(singleCollege);
router.route('/view/singleparticipate/:id').get(singleParticipate);
router.route('/view/editparticipate/:id').put(editParticipate);
router.route('/view/college/verify/:id').put(verifyCollege);
router.route('/view/college/unverify/:id').put(unVerifyCollege);
router.route('/view/participate/verify/:id').put(verifyParticipate);
router.route('/view/participate/unverify/:id').put(unVerifyParticipate);
router.route('/delete/college/:id').delete(delCol);
router.route('/delete/participate/:id').delete(delParticipate);
router.route('/delete/singleparticipate/:id').delete(delSingleParticipate);

module.exports = router;