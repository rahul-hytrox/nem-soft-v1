const express = require('express');
const router = express.Router();

const deliverController = require('../controllers/delivery-info.controller');

// get all deliver details
router.get('/', deliverController.getAllDeliveryDetails);

// get deliver details by ID
router.get('/:id',deliverController.getDeliveryByID);

// create new deliver details
router.post('/', deliverController.createNewDelivery);

// update deliver details
router.put('/:id', deliverController.updateDelivery);

// Edit deliver details
router.put('/edit/:id', deliverController.editDeliveryDetails);

// delete deliver details
router.put('/delete/:id',deliverController.deleteDeliverProfile);

module.exports = router;