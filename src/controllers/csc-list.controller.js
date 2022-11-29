const CountryMod = require('../models/csc-list.model');
const StateMod = require('../models/csc-list.model');
const CitiesMod = require('../models/csc-list.model');

// Get All Countries List
exports.getCountryList = (req, res)=> {
    CountryMod.CountryList.getCountries((err, country) =>{
        if(err)
        res.send(err);
        console.log('Country List', country);
        res.send(country)
    })
    /*CountryMod.getCountries((err, country) =>{
        if(err)
        res.send(err);
        console.log('Country List', country);
        res.send(country)
    })*/
}

// get State List
exports.getStateListByCountryID = (req, res)=>{
    //console.log('SID-------',req.params.sId)
    StateMod.StateList.getStates(req.params.sId, (err, stateList)=>{
        if(err)
        res.send(err);
        //console.log('sorted State List',stateList);
        res.send(stateList);
    })
    // CscModel.StateList(req.params.sId, (err, stateList)=>{
    //     if(err)
    //     res.send(err);
    //     console.log('single customer data',stateList);
    //     res.send(stateList);
    // })
}

// get Cities List
exports.getCitiesListByStateID = (req, res)=>{
    
    CitiesMod.CitiesList.getCities(req.query, (err, stateList)=>{
        if(err)
        res.send(err);
        console.log('single customer data',stateList);
        res.send(stateList);
    })


    // CscModel.getCities(req.params.id, (err, stateList)=>{
    //     if(err)
    //     res.send(err);
    //     console.log('single customer data',stateList);
    //     res.send(stateList);
    // })
}