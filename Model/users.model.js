const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({

        companyID: {
            type: 'string',
            required: true
        },
        loginName: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true
        },
        firstName: {
            type: 'string',
            required: true
        }, //ind1  
        lastName: {
            type: 'string',
            required: true
        }, //ind2
        email: {
            type: 'string',
            required: true
        }, //ind3
        phone: {
            type: 'string',
            required: false
        },
        useType: {
            type: 'string',
            required: true,
            enum : ["ADMIN", "ALL", "MARKET", "ZONE","SUBZONE","STATE","DEPOT","DEALER", "CUSTOMER", "SERVICEENGINEER", "DEMONSTRATOR" ],
            defaultsTo : "CUSTOMER"
        },
        role : {
            type : 'string',
            required : true
        },
        address : {
            type : 'string',
            required : true
        },
        isActive: {
            type: 'boolean',
            required: true,
            default: true
        },
        createdOn: { type: Date, default: Date.now },
        
        
        
    
    });

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.password;
    }
});


const mydb = mongoose.connection.useDb('Users');
module.exports = mydb.model('users', schema,'users');



