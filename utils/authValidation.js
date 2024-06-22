const Joi = require('joi')

exports.validateUserRegistration = (data) => {
    const JoiSchema = Joi.object({
        title: Joi.string().required().messages({
            'string.empty': `"Title" cannot be an empty field`,
            'any.required': `"Title" is a required field`
        }).label("Title is a required field"),
        first_name: Joi.string().required().messages({
            'string.empty': `"First name" cannot be an empty field`,
            'any.required': `"First name" is a required field`
        }),
        last_name: Joi.string().required().messages({
            'string.empty': `"Last name" cannot be an empty field`,
            'any.required': `"Last name" is a required field`
        }),
        email: Joi.string().email().required().messages({
            'string.empty': `"Email" cannot be an empty field`,
            'any.required': `"Email" is a required field`
        }),
        mobile_code: Joi.string().required().messages({
            'string.empty': `"Country code" cannot be an empty field`,
            'any.required': `"Country code" is a required field`
        }),
        mobile_number: Joi.string().required().messages({
            'string.empty': `Mobile number" cannot be an empty field`,
            'any.required': `Mobile number" is a required field`
        }),
        password: Joi.string().min(6).max(10).required().messages({
            "any.required": 'Password is required',
            "string.min": 'Password length must be at least 6 characters long'
        }),
        password_confirmation: Joi.any().equal(Joi.ref('password')).required().label('Confirm password').options({ messages: { 'any.only': '{{#label}} does not match'} })
        
    }).options({ abortEarly: false });
    return JoiSchema.validate(data)
}