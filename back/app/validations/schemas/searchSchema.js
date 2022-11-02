const joi = require('joi');

module.exports = joi.object({
    keyword: joi.string().pattern(new RegExp('%$')).required(),
    zip_code: joi.string().pattern(new RegExp('%$')).required()
});