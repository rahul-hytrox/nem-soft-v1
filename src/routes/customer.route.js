const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');

// get all customer
router.get('/', customerController.getCustomersList);

// get customer by ID
router.get('/:id',customerController.getCustomerByID);

// create new customer
router.post('/', customerController.createNewCustomer);

// update customer
router.put('/:id', customerController.updateCustomer);

// Edit customer
router.put('/edit/:id', customerController.updateCustomerDetails);

// delete customer
router.put('/delete/:id',customerController.deleteCustomer);

module.exports = router;