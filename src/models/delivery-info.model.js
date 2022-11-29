var dbConn  = require('../../dbs-config/db.config'); //payneer_driver

var DeliverInfo = function(delDetailList){
    this.delv_name              =   delDetailList.delv_name;
    this.delv_lastname          =   delDetailList.delv_lastname;
    this.delv_dob               =   delDetailList.delv_dob;
    this.delv_email             =   delDetailList.delv_email;
    this.delv_phone_num         =   delDetailList.delv_phone_num ? delDetailList.delv_phone_num : '';
    this.delv_altphone_num      =   delDetailList.delv_altphone_num ? delDetailList.delv_phone_num : '' ;
    this.delv_country           =   delDetailList.delv_country ? delDetailList.delv_country : '' ;
    this.delv_state             =   delDetailList.delv_state ? delDetailList.delv_state : '';
    this.delv_city              =   delDetailList.delv_city ? delDetailList.delv_city : '';
    this.delv_address           =   delDetailList.delv_address ? delDetailList.delv_address : '';
    this.delv_zipcode           =   delDetailList.delv_zipcode ? delDetailList.delv_zipcode : '';
    this.delv_profile_img       =   delDetailList.delv_profile_img ? delDetailList.delv_profile_img : '';
    this.delv_adhar_img         =   delDetailList.delv_adhar_img;
    this.delv_licence_img       =   delDetailList.delv_licence_img;
    this.delv_pan               =   delDetailList.delv_pan;
    this.delv_password          =   delDetailList.delv_password;
    this.delv_status            =   delDetailList.delv_status;
    this.createdAt              =   new Date();
    this.updatedAt              =   new Date();
}

// get all delivery sources
DeliverInfo.getAllDeliverySourcesDetails = (result) =>{
    dbConn.query('SELECT * FROM payneer_driver WHERE delv_status=1', (err, res)=>{
        if(err){
            console.log('Error while fetching delivery info list', err);
            result(null,err);
        }else{
            console.log('delivery info fetched successfully');
            result(null,res);
        }
    })
}

// get deliver by ID from DB
DeliverInfo.getDeliverySourcesByID = (id, result)=>{
    dbConn.query('SELECT * FROM payneer_driver WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching deliver source by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new deliver source account
DeliverInfo.createNewDeliverAccount = (deliverSourceReqData, result) =>{
    console.log(deliverSourceReqData)
    dbConn.query('INSERT INTO payneer_driver SET ? ', deliverSourceReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Delivery Source created successfully');
            result(null, res)
        }
    })
}

// update deliver details
DeliverInfo.updateDeliverProfile = (id, deliverSourceReqData, result)=>{
    dbConn.query(`UPDATE payneer_driver SET 
                    delv_name=?,
                    delv_lastname=?,
                    delv_dob=?,
                    delv_email=?,
                    delv_phone_num=?,
                    delv_altphone_num=?,
                    delv_country=?,
                    delv_state=?,
                    delv_city=?,
                    delv_address=?,
                    delv_zipcode=?,
                    delv_profile_img=?,
                    delv_adhar_img=?,
                    delv_licence_img=?,
                    delv_pan=?,
                    delv_password=?,
                    delv_status=?
                    WHERE id=?`, 
                                    [deliverSourceReqData.delv_name,
                                    deliverSourceReqData.delv_lastname,
                                    deliverSourceReqData.delv_dob,
                                    deliverSourceReqData.delv_email,
                                    deliverSourceReqData.delv_phone_num,
                                    deliverSourceReqData.delv_altphone_num,
                                    deliverSourceReqData.delv_country,
                                    deliverSourceReqData.delv_state,
                                    deliverSourceReqData.delv_city,
                                    deliverSourceReqData.delv_address,
                                    deliverSourceReqData.delv_zipcode,
                                    deliverSourceReqData.delv_profile_img,
                                    deliverSourceReqData.delv_adhar_img,
                                    deliverSourceReqData.delv_licence_img,
                                    deliverSourceReqData.delv_pan,
                                    deliverSourceReqData.delv_password,
                                    deliverSourceReqData.delv_status,
                                    id], (err, res)=>{
                                            if(err){
                                                console.log('Error while updating the customer');
                                                result(null, err);
                                            }else{
                                                console.log(res);
                                                result(null, res);
                                            }
                                    });

}

//edit deliver details for selected feild
DeliverInfo.editDeliverProfile = (id, deliverSourceReqData, result)=>{
    queryInputs = [];
    if(deliverSourceReqData.delv_name !== '' && deliverSourceReqData.delv_name !== undefined){ 
        let setItem = `delv_name="${deliverSourceReqData.delv_name}"`;
        queryInputs.push(setItem);
    }
    if(deliverSourceReqData.delv_lastname !== '' && deliverSourceReqData.delv_lastname !== undefined){
        let setItem = `delv_lastname="${deliverSourceReqData.delv_lastname}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_dob !== '' && deliverSourceReqData.delv_dob !== undefined){ 
        let setItem = `delv_dob="${deliverSourceReqData.delv_dob}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_email !== '' && deliverSourceReqData.delv_email !== undefined){
        let setItem = `delv_email="${deliverSourceReqData.delv_email}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_phone_num !== '' && deliverSourceReqData.delv_phone_num !== undefined){
        let setItem = `delv_phone_num="${deliverSourceReqData.delv_phone_num}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_altphone_num !== '' && deliverSourceReqData.delv_altphone_num !== undefined){
        let setItem = `delv_altphone_num="${deliverSourceReqData.delv_altphone_num}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_country !== '' && deliverSourceReqData.delv_country !== undefined){ 
        let setItem = `delv_country="${deliverSourceReqData.delv_country}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_state !== '' && deliverSourceReqData.delv_state !== undefined){ 
        let setItem = `delv_state="${deliverSourceReqData.delv_state}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_city !== '' && deliverSourceReqData.delv_city !== undefined){ 
        let setItem = `delv_city="${deliverSourceReqData.delv_city}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_address !== '' && deliverSourceReqData.delv_address !== undefined){ 
        let setItem = `delv_address="${deliverSourceReqData.delv_address}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_zipcode !== '' && deliverSourceReqData.delv_zipcode !== undefined){ 
        let setItem = `delv_zipcode="${deliverSourceReqData.delv_zipcode}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_profile_img !== '' && deliverSourceReqData.delv_profile_img !== undefined){ 
        let setItem = `delv_profile_img="${deliverSourceReqData.delv_profile_img}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_adhar_img !== '' && deliverSourceReqData.delv_adhar_img !== undefined){ 
        let setItem = `delv_adhar_img="${deliverSourceReqData.delv_adhar_img}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_licence_img !== '' && deliverSourceReqData.delv_licence_img !== undefined){ 
        let setItem = `delv_licence_img="${deliverSourceReqData.delv_licence_img}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_pan !== '' && deliverSourceReqData.delv_pan !== undefined){ 
        let setItem = `delv_pan="${deliverSourceReqData.delv_pan}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_password !== '' && deliverSourceReqData.delv_password !== undefined){ 
        let setItem = `delv_password="${deliverSourceReqData.delv_password}"`;
        queryInputs.push(setItem)
    }
    if(deliverSourceReqData.delv_status !== '' && deliverSourceReqData.delv_status !== undefined){ 
        let setItem = `delv_status="${deliverSourceReqData.delv_status}"`;
        queryInputs.push(setItem)
    }
    
    queryInputs = queryInputs.join();
    console.log(queryInputs)
    dbConn.query(`UPDATE payneer_driver SET ${queryInputs} WHERE id= ${id}`, (err, res)=>{
        console.log(deliverSourceReqData+'----'+id);
        if(err){
            console.log('Error while Edit the deliver info>>',err);
            result(null, err);
        }else{
            console.log(res);
            result(null, res);
        }
    });
}


// delete customer
DeliverInfo.deleteDeliverProfile = (id, deliverSourceReqData, result)=>{
    dbConn.query("UPDATE payneer_driver SET delv_status=? WHERE id=?", [deliverSourceReqData.delv_status,id], (err, res)=>{
        if(err){
            console.log('Error while deleting the customers');
            result(null, err);
        }else{
            console.log("Deliver Profile deleted successfully");
            result(null, res);
        }
    });

}

module.exports = DeliverInfo;