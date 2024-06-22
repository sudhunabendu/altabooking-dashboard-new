
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    roles_id: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ab_roles",
        default: '6677390d66b6fabd830d7d65'
    },
    title: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      default: 'Male'
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    iso: {
      type: String,
      required: false,
    },
    mobile_code: {
      type: String,
      required: false,
    },
    mobile_number: {
      type: String,
      required: false,
    },
    mobile_number_verified: {
      type: String,
      enum: ['0', '1'],
      default: '0'
    },
    total_rating: {
      type: String,
      required: false,
    },
    avg_rating: {
      type: mongoose.Schema.Types.Decimal128,
      default: '0.00'
    },
    total_review: {
      type: String,
      default: '0'
    },
    remember_token: {
      type: String,
      required: false,
    },
    registration_token: {
      type: String,
      required: false,
    },
    forgot_token: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive', 'Expired', 'Verified', 'Blocked'],
      default: 'Inactive'
    },
    is_otp_needed: {
      type: String,
      default: '0'
    },
    set_password_key: {
      type: String,
      required: false
    },
    valid_upto: {
      type: String,
      required: false
    },
    created_by: {
      type: String,
      default: '0'
    },
    updated_by: {
      type: String,
      default: '0'
    },
  }, { timestamps: true }),
  "ab_users"
);

module.exports = User;