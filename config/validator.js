const joi = require('joi')

const validator = (req, res, next) => {
    
    const schema = joi.object({
        name: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':' The name must have more than 3 characters',
            'string.max':" The name must not have more than 20 characters"
        }),

        surName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':' The surname must have more than 3 characters',
            'string.max':" The surname must not have more than 20 characters"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'Wrong email format'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min':'The password must contain at least 8 characters, an uppercase letter, a lowercase letter and a number',
            'string.pattern':"The password must be alphanumeric and it must contain at least 1 number"
        }),

        picture:joi.string().required(),

        country:joi.string().required(),
        
        from:joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
       
    if (validation.error) {
        
        return res.json({success: false, from:"validator", message:validation.error.details, test: validation})
        
    }
    
    next()
    
    
}

module.exports = validator