const db = require('../_helpers/db');
const responseMessage = require('../_helpers/responseMessage');

//Fetching all records from database collection
const fetchAllUsers = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let usersData = await db.User.find({"companyID": req.header('companyID')}).exec();
            console.log("Users data : ", usersData);
            resolve(usersData);
        } catch (error) {
            console.log("Error while fetching data from database");
            reject(responseMessage.userRetrieveError);
        }        
    })
}
//Fetching one records from database collection
const fetchOneUsers = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let usersData = await db.User.findOne({"companyID": req.header('companyID')}).exec();
            console.log("Users data : ", usersData);
            resolve(usersData);
        } catch (error) {
            console.log("Error while fetching data from database");
            reject(responseMessage.userRetrieveError);
        }        
    })
}
// checking the user are exist or not
const existUser = (loginName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let usersData = await db.User.findOne({"loginName": loginName}).exec();
            console.log("Users data : ", usersData);
            resolve(usersData);
        } catch (error) {
            console.log("Error while fetching data from database");
            reject(responseMessage.userRetrieveError);
        }        
    })
}

// create a new one uses
const createOneUsers = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userData = new db.User(user);
            await userData.save();
            resolve();
        } catch(error) {
            console.log("Database error : ", error);
            reject(responseMessage.userDatabaseError);
        }
    });
}

// Based on the loginName upadting the records
const updateUsers = (criteria, updatedObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            let machineData = await db.User.updateOne(criteria, updatedObj).exec();
            console.log("Machine data update : ", machineData);
            resolve(machineData);
        } catch (error) {
            console.log("Error while updating data from database : ", error);
            reject(responseMessage.userDatabaseError);
        }        
    })
}

// Based on the loginName remove the records
const deleteUsers = (deleteObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            let machineData = await db.User.remove({"loginName":deleteObj}).exec();
            console.log("Machine data update : ", machineData);
            resolve(machineData);
        } catch (error) {
            console.log("Error while updating data from database : ", error);
            reject(responseMessage.userDatabaseError);
        }        
    })
}

module.exports = {
    fetchAllUsers,
    fetchOneUsers,
    createOneUsers,
    updateUsers,
    existUser,
    deleteUsers
}