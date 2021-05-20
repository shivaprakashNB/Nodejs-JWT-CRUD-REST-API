const config = require('../config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.conn_DB, connectionOptions || config.conndata_DB, connectionOptions);
mongoose.Promise = global.Promise;
mongoose.set("debug",true);


module.exports = {
    User: require('../Model/users.model')
}