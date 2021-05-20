const responseMessage = require('../_helpers/responseMessage');
const usersUserDao = require('./users.dao');
const isEmpty = require('is-empty');
const bcrypt = require('bcryptjs');

//Fetching all records from database collection
const getAllUsers = (req) => {
    return new Promise(async (resolve, reject) => {
        usersUserDao.fetchAllUsers(req)
        .then(data => {
            if(data && data !== null && data !== undefined ) {
                resolve(data);
            } else {
                reject(responseMessage.userNotFound);
            }
        })
        .catch(error => {
            console.log("Error while fetching data users data : ", error);
            reject(error);
        })
    });
}
//Fetching One records from database collection
const getOneUsers = (req) => {
    return new Promise(async (resolve, reject) => {
        usersUserDao.fetchOneUsers(req)
        .then(data => {
            if(data && data !== null && data !== undefined ) {
                resolve(data);
            } else {
                reject(responseMessage.userNotFound);
            }
        })
        .catch(error => {
            console.log("Error while fetching data users data : ", error);
            reject(error);
        })
    });
}

// create a new one uses
const createOneUsers = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            await validateCreateUsersRequest(userData);
            userData.loginName= userData.loginName.toUpperCase();
            if (await usersUserDao.existUser(userData.loginName )) {
                resolve({"status":'loginName ' + userData.loginName + ' is already taken'});
            }
            if (userData.password) {
                userData.password = bcrypt.hashSync(userData.password, 10);
            }
            await usersUserDao.createOneUsers(userData);
            resolve(responseMessage.userCreteSuccess.body);
        } catch(error) {
            console.log("Error while inserting user data : ", error);
            reject(error);
        }
    })
}

// Based on the loginName upadting the records
const updateUsers = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            await validateUpdateUsersRequest(userData.body);
            const criteria = {loginName: userData.body.loginName, companyID: userData.header('companyID')};
            const data = {"$set": {email: userData.body.email,phone:userData.body.phone}};
            await usersUserDao.updateUsers(criteria, data);
            resolve(responseMessage.userUpdateSuccess.body);
        } catch(error) {
            console.log("Error while inserting user data : ", error);
            reject(error);
        }
    })
}

// Based on the loginName remove the records
const deleteUsers = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            await validateDeleteUsersRequest(userData.body);
            if (await usersUserDao.existUser(userData.body.loginName )) {
                await usersUserDao.deleteUsers(userData.body.loginName);
                resolve(responseMessage.userDeleteSuccess.body);
            }else{
                resolve({"status":'loginName ' + userData.body.loginName + ' does not exist'});
            }
            
        } catch(error) {
            console.log("Error while inserting user data : ", error);
            reject(error);
        }
    })
}

// validator for create users
const validateCreateUsersRequest = (usersRequest) => {
    return new Promise((resolve, reject) => {
        try {
            if(isEmpty(usersRequest)) {
                throw "Invalid request, no data provided";
            } else if(isEmpty(usersRequest.companyID)) {
                throw "companyID not provided in request";
            } else if(isEmpty(usersRequest.firstName)) {
                throw "firstName not provided in request";
            } else if(isEmpty(usersRequest.lastName)) {
                throw "lastName not provided in request";
            } else if(isEmpty(usersRequest.loginName)) {
                throw "loginName not provided in request";
            } else if(isEmpty(usersRequest.password)) {
                throw "password not provided in request";
            } else if(isEmpty(usersRequest.email)) {
                throw "email not provided in request";
            } else if(isEmpty(usersRequest.useType)) {
                throw "useType not provided in request";
            } else if(isEmpty(usersRequest.role)) {
                throw "role not provided in request";
            } else if(isEmpty(usersRequest.phone)) {
                throw "phone not provided in request";
            } else if(isEmpty(usersRequest.address)) {
                throw "address provided in request";
            }else {
                resolve(usersRequest);
            }
        } catch(error) {
            console.log("Error in validating the user request");
            reject(responseMessage.validationError(error));
        }
    })
}

// validator for update the users
const validateUpdateUsersRequest = (userRequest) => {
    return new Promise((resolve, reject) => {
        console.log('validateUpdateUsersRequest : ',userRequest );
        try {
            if(!userRequest.email || userRequest.email === undefined || userRequest.email === ''){
                throw "email not provided in request";
            } else if(!userRequest.phone || userRequest.phone === undefined || userRequest.phone === ''){
                throw "phone provided in request";
            } else {
                resolve(userRequest);
            }
        } catch(error) {
            console.log("Error in validating the user request");
            reject(responseMessage.validationError(error));
        }
    })
}

// validator for delete the users
const validateDeleteUsersRequest = (userRequest) => {
    return new Promise((resolve, reject) => {
        console.log('validateUpdateUsersRequest : ',userRequest );
        try {
            if(!userRequest.loginName || userRequest.loginName === undefined || userRequest.loginName === ''){
                throw "loginName not provided in request";
            }  else {
                resolve(userRequest);
            }
        } catch(error) {
            console.log("Error in validating the user request");
            reject(responseMessage.validationError(error));
        }
    })
}

module.exports = {
    getAllUsers,
    getOneUsers,
    createOneUsers,
    updateUsers,
    deleteUsers
}