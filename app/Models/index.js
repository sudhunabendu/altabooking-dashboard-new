const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// db.ab_currencies = require("./currency.model");
// db.ab_user_details = require("./userdetail.model");
// db.ab_user_codes = require("./usercode.model");
db.ab_user = require("./user.model");
// db.ab_email_template = require("./emailTemplate.model");
db.ab_roles= require("./roles.model");

module.exports = db;