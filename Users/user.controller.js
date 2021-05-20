const express = require("express");
const router = express.Router();
const UserService = require("./users.service");
const authService = require("../_helpers/authenticator");

//Fetching all records from database collection
const getAllUsers = async (req, res) => {
    console.log("GET - /: ",req.body);
    try {
        await authService.authenticate(req.header('companyID'));
        const response = await UserService.getAllUsers(req);
        console.log("Response : ", response);
        res.status(200).json(response);
    } catch(error) {
        console.log(error);
        res.status(error.httpCode).json(error.body);
    } 
};

//Fetching one records from database collection
const getOneUsers = async (req, res) => {
    console.log("GET - /: ",req.body);
    try {
        await authService.authenticate(req.header('companyID'));
        const response = await UserService.getOneUsers(req);
        console.log("Response : ", response);
        res.status(200).json(response);
    } catch(error) {
        console.log(error);
        res.status(error.httpCode).json(error.body);
    } 
};

//create a new one uses
const createOneUsers = async (req, res) => {
    console.log("GET - /: ",req.body);
    try {
        const response = await UserService.createOneUsers(req.body);
        console.log("Response : ", response);
        res.status(200).json(response);
    } catch(error) {
        console.log(error);
        res.status(error.httpCode).json(error.body);
    } 
};
// Based on the loginName upadting the records 
const updateUsers = async (req, res) => {
    console.log("GET - /: ",req.body);
    try {
        await authService.authenticate(req.header('companyID'));
        const response = await UserService.updateUsers(req);
        console.log("Response : ", response);
        res.status(200).json(response);
    } catch(error) {
        console.log(error);
        res.status(error.httpCode).json(error.body);
    } 
};
// remove particular record
const deleteUsers = async (req, res) => {
    console.log("GET - /: ",req.body);
    try {
        await authService.authenticate(req.header('companyID'));
        const response = await UserService.deleteUsers(req);
        console.log("Response : ", response);
        res.status(200).json(response);
    } catch(error) {
        console.log(error);
        res.status(error.httpCode).json(error.body);
    } 
};

router.get('/getAllUsers', getAllUsers);
router.get('/getOneUsers', getOneUsers);
router.post('/createOneUsers', createOneUsers);
router.put('/updateUsers', updateUsers);
router.delete('/deleteUsers', deleteUsers);
module.exports = router;