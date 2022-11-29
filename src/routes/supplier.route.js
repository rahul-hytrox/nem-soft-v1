const express = require('express');
const router = express.Router();

const supplierController = require('../controllers/supplier.controller');

// get all Supplier
router.get('/', supplierController.getSupplierList);

// get Supplier by ID
router.get('/:id',supplierController.getSupplierByID);

// create new Supplier
router.post('/', supplierController.createNewSupplier);

// update Supplier
router.put('/:id', supplierController.updateSupplier);

// Edit Supplier
router.put('/edit/:id', supplierController.updateSupplierDetails);

// delete Supplier
router.put('/delete/:id',supplierController.deleteSupplier);

module.exports = router;