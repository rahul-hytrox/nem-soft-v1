const express = require('express');
const router = express.Router();

const CscLsController = require('../controllers/csc-list.controller');

// get all countries
router.get('/country', CscLsController.getCountryList);
// get States
router.get('/state/:sId',CscLsController.getStateListByCountryID);
// get Cities
router.get('/cities',CscLsController.getCitiesListByStateID);


module.exports = router;