const jwt = require("jsonwebtoken"); 

const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

   
/***
 * [JWT Handler]
 */
/*const createToken = async() =>{
    const token = await jwt.sign({id:"5ad22S52W1p1c2s8Op96Awdx"},"jAOma1xKKa55xjIKkajnxk");
    console.log(token)
}
createToken();*/


// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('welcome to RestAPI v1');
});

/**
 * API Request Route with URL endpoints
 */

//Employee routes
    /*const employeeRoutes = require('./src/routes/employee.route');
    app.use('/api/v1/employee', employeeRoutes);*/

//Customer routes
const customerRoutes = require('./src/routes/customer.route');
app.use('/api/v1/customer', customerRoutes);


//Supplier routes
const supplierRoutes = require('./src/routes/supplier.route');
app.use('/api/v1/supplier', supplierRoutes);

//Delivery routes
const deliverRoutes = require('./src/routes/delivery-info.route');
app.use('/api/v1/deliver', deliverRoutes);

//CSC {Country State & Cities} routes
const cscRoutes = require('./src/routes/csc.route');
app.use('/api/v1/csc', cscRoutes);



// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});