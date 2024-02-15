const Joi = require("joi")


const validateSchema = Joi.object({
    organization: Joi.string().min(5).max(20).required(), 
    domainurl: Joi.string() .min(5) .max(30).required(),
    email: Joi.string().email().min(5).max(35).required(),
    phone:Joi.string().optional()
   
   
})
const validateCompanyData = (req, res, next) => {
    const { error } = validateSchema.validate(req.body);
  
    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      return res.status(400).json({ error: errorMessage });
    }
  
    next();
  };

  module.exports = validateCompanyData