
const mongoose = require("mongoose");

const User = mongoose.model(
    "Role",
    new mongoose.Schema({
        role: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive'],
            default: 'Active'
        },
        created_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        updated_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },{timestamps:true}),
    "ab_roles"
);

module.exports = User;