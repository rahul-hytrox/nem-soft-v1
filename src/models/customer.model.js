var dbConn  = require('../../dbs-config/db.config');

var Customers = function(customer){
    this.user_fname     =   customer.user_fname;
    this.user_lname     =   customer.user_lname;
    this.user_contact   =   customer.user_contact;
    this.user_email     =   customer.user_email;
    this.dob            =   customer.dob;
    this.user_country   =   customer.user_country? customer.user_country : '';
    this.user_state     =   customer.user_state ? customer.user_state : '';
    this.user_city      =   customer.user_city ? customer.user_city : '';
    this.user_zipcode   =   customer.user_zipcode ? customer.user_zipcode : '';
    this.user_address   =   customer.user_address ? customer.user_address : '';
    this.user_password  =   customer.user_password ? customer.user_password : '';
    this.user_profile   =   customer.user_profile ? customer.user_profile : '';
    this.user_status    =   customer.user_status ? customer.user_status : 1;
    this.createdAt      =   new Date();
    this.updatedAt      =   new Date();
}

// get all customers
Customers.getAllCustomers = (result) =>{
    dbConn.query('SELECT * FROM payneer_customers WHERE user_status=1', (err, res)=>{
        if(err){
            console.log('Error while fetching customers', err);
            result(null,err);
        }else{
            console.log('customers fetched successfully');
            result(null,res);
        }
    })
}

// get customers by ID from DB
Customers.getCustomerByID = (id, result)=>{
    dbConn.query('SELECT * FROM payneer_customers WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching customer by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new customers
Customers.createCustomer = (customerReqData, result) =>{
    dbConn.query('INSERT INTO payneer_customers SET ? ', customerReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Customer created successfully');
            result(null, res)
        }
    })
}

// update customers
Customers.updateCustomer = (id, customerReqData, result)=>{
    dbConn.query("UPDATE payneer_customers SET user_fname=?,user_lname=?,user_contact=?,user_email=?,dob=?,user_country=?,user_state=?,user_city=?,user_zipcode=?,user_address=?,user_password=?,user_profile=? WHERE id = ?", [customerReqData.user_fname,customerReqData.user_lname,customerReqData.user_contact,customerReqData.user_email,customerReqData.dob,customerReqData.user_country,customerReqData.user_state,customerReqData.user_city,customerReqData.user_zipcode,customerReqData.user_address,customerReqData.user_password,customerReqData.user_profile,id], (err, res)=>{
        if(err){
            console.log('Error while updating the customer');
            result(null, err);
        }else{
            console.log(res);
            result(null, res);
        }
    });

}

//edit customer details for selected feild
Customers.updateCustomerDetails = (id, customerReqData, result)=>{
    queryInputs = [];
    if(customerReqData.user_fname !== '' && customerReqData.user_fname !== undefined){ 
        let setItem = `user_fname="${customerReqData.user_fname}"`;
        queryInputs.push(setItem);
    }
    if(customerReqData.user_lname !== '' && customerReqData.user_lname !== undefined){
        let setItem = `user_lname="${customerReqData.user_lname}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_contact !== '' && customerReqData.user_contact !== undefined){ 
        let setItem = `user_contact="${customerReqData.user_contact}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_email !== '' && customerReqData.user_email !== undefined){
        let setItem = `user_email="${customerReqData.user_email}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.dob !== '' && customerReqData.dob !== undefined){
        let setItem = `dob="${customerReqData.dob}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_country !== '' && customerReqData.user_country !== undefined){
        let setItem = `user_country="${customerReqData.user_country}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_state !== '' && customerReqData.user_state !== undefined){ 
        let setItem = `user_state="${customerReqData.user_state}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_city !== '' && customerReqData.user_city !== undefined){ 
        let setItem = `user_city="${customerReqData.user_city}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_zipcode !== '' && customerReqData.user_zipcode !== undefined){ 
        let setItem = `user_zipcode="${customerReqData.user_zipcode}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_address !== '' && customerReqData.user_address !== undefined){ 
        let setItem = `user_address="${customerReqData.user_address}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_password !== '' && customerReqData.user_password !== undefined){ 
        let setItem = `user_password="${customerReqData.user_password}"`;
        queryInputs.push(setItem)
    }
    if(customerReqData.user_profile !== '' && customerReqData.user_profile !== undefined){ 
        let setItem = `user_profile="${customerReqData.user_profile}"`;
        queryInputs.push(setItem)
    }
    
    queryInputs = queryInputs.join();
    console.log(queryInputs)
    dbConn.query(`UPDATE payneer_customers SET ${queryInputs} WHERE id= ${id}`, (err, res)=>{
        console.log(customerReqData+'----'+id);
        if(err){
            console.log('Error while updating the customer>>',err);
            result(null, err);
        }else{
            console.log(res);
            result(null, res);
        }
    });
}


// delete customer
Customers.deleteCustomer = (id, customerReqData, result)=>{
    // dbConn.query('DELETE FROM payneer_customers WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the customer');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    console.log('customer_status',customerReqData.user_status);
    console.log('customer_ID',id);

    dbConn.query("UPDATE payneer_customers SET user_status=? WHERE id=?", [customerReqData.user_status,id], (err, res)=>{
        if(err){
            console.log('Error while deleting the customers');
            result(null, err);
        }else{
            console.log("customers deleted successfully");
            result(null, res);
        }
    });

}

module.exports = Customers;