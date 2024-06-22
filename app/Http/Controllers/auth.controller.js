const db = require("../../Models");
const userModel = db.ab_user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../../config/auth.config.js");
const validation = require("../../../utils/authValidation.js");
const FrontUrl = process.env.FRONTEND_URL;


class AuthController {
    async registration(req, res){
        const data = req.body;
        if (!data || Object.keys(data).length == 0) {
            res.status(200).send({
                res_code: 201,
                response: "Parameter is missing!"
            });
            return;
        }

        let responseData = validation.validateUserRegistration(data);
        if (responseData.error) {
            res.status(200).send({
                res_code: 201,
                response: responseData
            });
        }else{
            try {
                let email = req.body.email;
                let mobileCode = req.body.mobile_code;
                let phoneNumber = req.body.phone;
                let userMobileCheck = await userModel.findOne({ "mobile_code": mobileCode, "phone": phoneNumber }).select(['id', 'first_name', 'mobile_number_verified']);
                if (userMobileCheck != null && userMobileCheck) {
                    res.send({
                        res_code: 201,
                        response: "This mobile number already exists in account."
                    });
                    return;
                }

                const userEmail = await userModel.findOne({ email: email });
                if (userEmail) {
                    res.send({
                        res_code: 201,
                        response: "Email already exists!"
                    });
                    return;
                }

                let user = {
                    role_id:"6677390d66b6fabd830d7d66",
                    title: req.body.title,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    mobile_code: mobileCode,
                    mobile_number: phoneNumber,
                    email: email,
                    password: bcrypt.hashSync(req.body.password, 8),
                }
                const newUser = new userModel(user);
                newUser.save();
                res.send({
                    res_code: 200,
                    response: "Registration successfully!"
                })

            } catch (error) {
                res.send({
                    res_code: 201,
                    response: error.message
                });
            }
        }
    }
}

module.exports = new AuthController();