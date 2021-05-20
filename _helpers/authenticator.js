const User = require('../Model/users.model');
const responseMessage = require("./responseMessage");

const authenticate = (comapnyId) => {
    return new Promise(async (resolve, reject) => {
        let company = await User.find({"companyID": comapnyId});
        if(company.length < 1) {
            reject(responseMessage.unauthorized);
        } else {
            resolve();
        }
    })    
}

module.exports = {
    authenticate
};