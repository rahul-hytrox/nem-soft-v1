var dbConn  = require('../../dbs-config/db.config');

var Supplier = function(suplier){
    this.sup_fname 	=	suplier.sup_fname
    this.sup_lname 	=	suplier.sup_lname
    this.sup_email 	=	suplier.sup_email
    this.sup_contact =	suplier.sup_contact
    this.sup_dob 	=	suplier.sup_dob
    this.sup_country =	suplier.sup_country ? suplier.sup_country : '';
    this.sup_state 	=	suplier.sup_state ? suplier.sup_state : '';
    this.sup_city 	=	suplier.sup_city ? suplier.sup_city : '';
    this.sup_address =	suplier.sup_address ? suplier.sup_address : '';
    this.sup_zipcode =	suplier.sup_zipcode	? suplier.sup_zipcode : '';
    this.sup_password =	suplier.sup_password ? suplier.sup_password : '';
    this.sup_profile =	suplier.sup_profile ? suplier.sup_profile : '';
    this.sup_status =	suplier.sup_status ? suplier.sup_status : 1;
    this.sup_createdAt =	new Date();
    this.sup_updatedAt =	new Date();
}

// get all supplier
Supplier.getAllSupplier = (result) =>{
    dbConn.query('SELECT * FROM payneer_supplier WHERE sup_status=1', (err, res)=>{
        if(err){
            console.log('Error while fetching customers', err);
            result(null,err);
        }else{
            console.log('customers fetched successfully');
            result(null,res);
        }
    })
}

// get supplier by ID from DB
Supplier.getSupplierByID = (id, result)=>{
    dbConn.query('SELECT * FROM payneer_supplier WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching supplier by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new supplier
Supplier.createSupplier = (supplieReqData, result) =>{
    dbConn.query('INSERT INTO payneer_supplier SET ? ', supplieReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('supplier created successfully');
            result(null, res)
        }
    })
}

// update supplier
Supplier.updateSupplier = (id, supplieReqData, result)=>{
    
    dbConn.query("UPDATE payneer_supplier SET sup_fname=?,sup_lname=?,sup_contact=?,sup_email=?,sup_dob=?,sup_country=?,sup_state=?,sup_city=?,sup_address=?,sup_zipcode=?,sup_password=?,sup_profile=? WHERE id = ?", [supplieReqData.sup_fname,supplieReqData.sup_lname,supplieReqData.sup_contact,supplieReqData.sup_email,supplieReqData.sup_dob,supplieReqData.sup_country,supplieReqData.sup_state,supplieReqData.sup_city,supplieReqData.sup_address,supplieReqData.sup_zipcode,supplieReqData.sup_password,supplieReqData.sup_profile,id], (err, res)=>{
        console.log(supplieReqData+'----'+id);
        if(err){
            console.log('Error while updating the supplier');
            result(null, err);
        }else{
            console.log(res);
            result(null, res);
        }
    });

}

//edit supplier details for selected feild
Supplier.updateSupplierDetails = (id, supplieReqData, result)=>{
    queryInputs = [];
    if(supplieReqData.sup_fname !== '' && supplieReqData.sup_fname !== undefined){ 
        let setItem = `sup_fname="${supplieReqData.sup_fname}"`;
        queryInputs.push(setItem);
    }
    if(supplieReqData.sup_lname !== '' && supplieReqData.sup_lname !== undefined){
        let setItem = `sup_lname="${supplieReqData.sup_lname}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_contact !== '' && supplieReqData.sup_contact !== undefined){ 
        let setItem = `sup_contact="${supplieReqData.sup_contact}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_email !== '' && supplieReqData.sup_email !== undefined){
        let setItem = `sup_email="${supplieReqData.sup_email}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_dob !== '' && supplieReqData.sup_dob !== undefined){
        let setItem = `sup_dob="${supplieReqData.sup_dob}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_country !== '' && supplieReqData.sup_country !== undefined){
        let setItem = `sup_country="${supplieReqData.sup_country}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_state !== '' && supplieReqData.sup_state !== undefined){ 
        let setItem = `sup_state="${supplieReqData.sup_state}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_city !== '' && supplieReqData.sup_city !== undefined){ 
        let setItem = `sup_city="${supplieReqData.sup_city}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_zipcode !== '' && supplieReqData.sup_zipcode !== undefined){ 
        let setItem = `sup_zipcode="${supplieReqData.sup_zipcode}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_address !== '' && supplieReqData.sup_address !== undefined){ 
        let setItem = `sup_address="${supplieReqData.sup_address}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_password !== '' && supplieReqData.sup_password !== undefined){ 
        let setItem = `sup_password="${supplieReqData.sup_password}"`;
        queryInputs.push(setItem)
    }
    if(supplieReqData.sup_profile !== '' && supplieReqData.sup_profile !== undefined){ 
        let setItem = `sup_profile="${supplieReqData.sup_profile}"`;
        queryInputs.push(setItem)
    }
    
    queryInputs = queryInputs.join();
    console.log(queryInputs)
    dbConn.query(`UPDATE payneer_supplier SET ${queryInputs} WHERE id= ${id}`, (err, res)=>{
        console.log(supplieReqData+'----'+id);
        if(err){
            console.log('Error while updating the supplier>>',err);
            result(null, err);
        }else{
            console.log(res);
            result(null, res);
        }
    });
}


// delete supplier
Supplier.deleteSupplier = (id, supplieReqData, result)=>{
    // dbConn.query('DELETE FROM payneer_supplier WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the customer');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    console.log('supplier',supplieReqData.sup_status);
    console.log('supplier_ID',id);

    dbConn.query("UPDATE payneer_supplier SET sup_status=? WHERE id=?", [supplieReqData.sup_status,id], (err, res)=>{
        if(err){
            console.log('Error while deleting the supplier');
            result(null, err);
        }else{
            console.log("supplier deleted successfully");
            result(null, res);
        }
    });

}

module.exports = Supplier;