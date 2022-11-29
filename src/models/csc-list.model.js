var dbConn  = require('../../dbs-config/db.config');

var CountryList = function(getCountryItem){
    this.name   =   getCountryItem.name;
    this.iso3   =   getCountryItem.iso3;
    this.numeric_code   =   getCountryItem.numeric_code;
    this.iso2   =   getCountryItem.iso2;
    this.phonecode  =   getCountryItem.phonecode;
    this.capital    =   getCountryItem.capital;
    this.currency   =   getCountryItem.currency;
    this.currency_name  =   getCountryItem.currency_name;
    this.currency_symbol    =   getCountryItem.currency_symbol;
    this.tld    =   getCountryItem.tld;
    this.native =   getCountryItem.native;
    this.region =   getCountryItem.region;
    this.subregion  =   getCountryItem.subregion;
    this.timezones  =   getCountryItem.timezones;
    this.translations   =   getCountryItem.translations;
    this.latitude   =   getCountryItem.latitude;
    this.longitude  =   getCountryItem.longitude;
}

var StateList = function(getStateItem){
    this.name           =   getStateItem.name
    this.country_id     =   getStateItem.country_id
    this.country_code   =   getStateItem.country_code
    this.fips_code      =   getStateItem.fips_code
    this.iso2           =   getStateItem.iso2
    this.type           =   getStateItem.type
    this.latitude       =   getStateItem.latitude
    this.longitude      =   getStateItem.longitude
    this.flag           =   getStateItem.flag
}

var CitiesList = function(getCitiesItem){
    this.name           =   getCitiesItem.name
    this.state_id       =   getCitiesItem.state_id
    this.state_code     =   getCitiesItem.state_code
    this.country_id     =   getCitiesItem.country_id
    this.country_code   =   getCitiesItem.country_code
    this.latitude       =   getCitiesItem.latitude
    this.longitude      =   getCitiesItem.longitude
    this.flag           =   getCitiesItem.flag
}

// get all Countries
CountryList.getCountries = (result) =>{
    dbConn.query('SELECT * FROM  countries', (err, res)=>{
        if(err){
            console.log('Error while fetching country list', err);
            result(null,err);
        }else{
            console.log('Countries>>>',res);
            result(null,res);
        }
    })
}

//get State List filter by Country ID
StateList.getStates = (id, result)=>{
    let StateId = id.split("=");
    StateId = StateId['1'];
    console.log("You have receiverd Country Code------- ",StateId)
    dbConn.query('SELECT * FROM states WHERE country_code=? ORDER BY name', StateId, (err, res)=>{
        if(err){
            console.log('Error while fetching customer by id', err);
            result(null, err);
        }else{
            console.log('States>>>',res);
            result(null, res);
        }
    })
}

//get Cities List filter by State ID
CitiesList.getCities = (getStateParams, result)=>{
    let stateId = getStateParams.stateId;
    let countryId = getStateParams.countryID;
    dbConn.query('SELECT * FROM cities WHERE state_id='+stateId+' AND country_id='+countryId+' ORDER BY name',(err, res)=>{
        if(err){
            console.log('Error while fetching customer by id', err);
            result(null, err);
        }else{
            console.log('Cities>>>',res);
            result(null, res);
        }
    })
}

module.exports = {CountryList,StateList,CitiesList};