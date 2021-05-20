module.exports = {
    userRetrieveError: {
        httpCode: 500,
        body: {
            code: "DS_5002",
            message: "Could not get services from database"
        }
    },
    userNotFound: {
        httpCode: 404,
        body: {
            code: "DS_4003",
            message: "Could not find service data"
        }
    },
    unauthorized: {
        httpCode: 401,
        body: {
            code: "DS_4001",
            message: "Unauthorized"
        }
    },
    userCreteSuccess: {
        httpCode: 200,
        body: {
            code: "DS_2001",
            message: "User record created successfully"
        }
    },
    userUpdateSuccess: {
        httpCode: 200,
        body: {
            code: "DS_2002",
            message: "User record updated successfully"
        }
    },
    userDeleteSuccess: {
        httpCode: 200,
        body: {
            code: "DS_2002",
            message: "User record deleted successfully"
        }
    },
    userDatabaseError: {
        httpCode: 500,
        body: {
            code: "DS_5003",
            message: "Could not create user record from database"
        }
    },
    validationError : (message) => {
        return (
            {
                httpCode: 400,
                body: {
                    code: "DS_4004",
                    message: message
                }
            }
        );        
    }
}