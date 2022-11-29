const SupplierModel = require('../models/supplier.model');

// get all Supplieres list
exports.getSupplierList = (req, res)=> {
    SupplierModel.getAllSupplier((err, supplier) =>{
        if(err)
        res.send(err);
        console.log('All Suppliers List', supplier);
        res.send(supplier)
    })
}

// get Supplieres by ID
exports.getSupplierByID = (req, res)=>{
    //console.log('get Supplier by id');
    SupplierModel.getSupplierByID(req.params.id, (err, supplier)=>{
        if(err)
        res.send(err);
        console.log('single Supplier data>>',supplier);
        res.send(supplier);
    })
}

// create new Supplieres
exports.createNewSupplier = (req, res) =>{
    const supplieReqData = new SupplierModel(req.body);
    console.log('supplieReqData', supplieReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        SupplierModel.createSupplier(supplieReqData, (err, supplier)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Supplier Created Successfully', data: supplier.insertId})
        })
    }
}

// update Supplieres
exports.updateSupplier = (req, res)=>{
    const supplierReqData = new SupplierModel(req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        SupplierModel.updateSupplier(req.params.id, supplierReqData, (err, supplier)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Supplier updated Successfully'})
        })
    }
}

// Edit Supplieres Details
exports.updateSupplierDetails = (req, res)=>{
    const supplierReqData = new SupplierModel(req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        SupplierModel.updateSupplierDetails(req.params.id, supplierReqData, (err, supplier)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Edit Supplier Successfully'})
        })
    }
}


// delete Supplieres
exports.deleteSupplier = (req, res)=>{
    console.log("Request Parmas>>>",req.params)
    const supplierReqData = new SupplierModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        SupplierModel.deleteSupplier(req.params.id, supplierReqData, (err, supplier)=>{
            if(err)
            res.send(err);
            res.json({success:true, message: 'Supplier deleted successully!'});
        })
    }

    /*CustomerModel.deleteCustomer(req.params.id,supplieReqData,(err, customer)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Customer deleted successully!'});
    })*/
}