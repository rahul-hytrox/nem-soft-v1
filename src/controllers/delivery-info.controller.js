const DeliverModel = require('../models/delivery-info.model');

// get all Delivery list
exports.getAllDeliveryDetails = (req, res)=> {
    //console.log('here all Delivery list');
    DeliverModel.getAllDeliverySourcesDetails((err, deliverData) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('All Delivery List', deliverData);
        res.send(deliverData)
    })
}

// get Delivery by ID
exports.getDeliveryByID = (req, res)=>{
    //console.log('get Delivery by id');
    DeliverModel.getDeliverySourcesByID(req.params.id, (err, deliverData)=>{
        if(err)
        res.send(err);
        console.log('single Delivery data',deliverData);
        res.send(deliverData);
    })
}

// create new Delivery
exports.createNewDelivery = (req, res) =>{
    const deliverReqData = new DeliverModel(req.body);
    console.log('deliverReqData', deliverReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        DeliverModel.createNewDeliverAccount(deliverReqData, (err, deliverData)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Deliver details Created Successfully', data: deliverData.insertId})
        })
    }
}

// update Delivery
exports.updateDelivery = (req, res)=>{
    const deliverReqData = new DeliverModel(req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        DeliverModel.updateDeliverProfile(req.params.id, deliverReqData, (err, deliverData)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Deliver details updated Successfully'})
        })
    }
}

// Edit Delivery
exports.editDeliveryDetails = (req, res)=>{
    const deliverReqData = new DeliverModel(req.body);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        DeliverModel.editDeliverProfile(req.params.id, deliverReqData, (err, deliverData)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Edit Deliver details Successfully'})
        })
    }
}


// delete Delivery
exports.deleteDeliverProfile = (req, res)=>{
    const deliverReqData = new DeliverModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        DeliverModel.deleteDeliverProfile(req.params.id, deliverReqData, (err, deliverData)=>{
            if(err)
            res.send(err);
            res.json({success:true, message: 'Deliver details deleted successully!'});
        })
    }
}