const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../Users/users.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/Users/getAllUsers',
            '/Users/getOneUsers',
            '/Users/createOneUsers',
            '/Users/updateUsers',
            '/Users/deleteUsers'
        ]
    });
}

async function isRevoked(req, payload, done) {

    const user = await userService.getById(payload.sub);
    console.log(user)

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};