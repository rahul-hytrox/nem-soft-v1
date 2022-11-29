const CustomerModel = require('../models/customer.model');

// get all customer list
exports.getCustomersList = (req, res)=> {
    //console.log('here all customers list');
    CustomerModel.getAllCustomers((err, customers) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('All Customers List', customers);
        res.send(customers)
    })
}

// get customer by ID
exports.getCustomerByID = (req, res)=>{
    //console.log('get customer by id');
    CustomerModel.getCustomerByID(req.params.id, (err, customer)=>{
        if(err)
        res.send(err);
        console.log('single customer data',customer);
        res.send(customer);
    })
}

// create new customer
exports.createNewCustomer = (req, res) =>{
    const customerReqData = new CustomerModel(req.body);
    console.log('customerReqData', customerReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CustomerModel.createCustomer(customerReqData, (err, customer)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'customer Created Successfully', data: customer.insertId})
        })
    }
}

// update Customer
exports.updateCustomer = (req, res)=>{
    const customerReqData = new CustomerModel(req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CustomerModel.updateCustomer(req.params.id, customerReqData, (err, customer)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Customer updated Successfully'})
        })
    }
}

// Edit Customer
exports.updateCustomerDetails = (req, res)=>{
    const customerReqData = new CustomerModel(req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CustomerModel.updateCustomerDetails(req.params.id, customerReqData, (err, customer)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Edit Customer Successfully'})
        })
    }
}


// delete Customer
exports.deleteCustomer = (req, res)=>{
    console.log("Request Parmas>>>",req.params)
    const customerReqData = new CustomerModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CustomerModel.deleteCustomer(req.params.id, customerReqData, (err, customer)=>{
            if(err)
            res.send(err);
            res.json({success:true, message: 'Customer deleted successully!'});
        })
    }

    /*CustomerModel.deleteCustomer(req.params.id,customerReqData,(err, customer)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Customer deleted successully!'});
    })*/
}