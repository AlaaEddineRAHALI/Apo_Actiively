const { expressjwt: jwt} = require("express-jwt");
const { sign, verify } = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const customApiError = require('../errors/apiErrors');

const createTokens = (organism) => {
    const accessToken = sign({ email: organism.email}, jwtSecret);
    return accessToken;
}

const validateToken = (req, res, next) => {
    const accessToken = req.cookies.access_token
    if(!accessToken){
        return res.status(400).json({error: "User not Authenticated."});
    }

    try {
        const validToken = verify(accessToken, jwtSecret, (err, decodedToken) => {
            if(err){
                throw new Error('Bad access_token')
            }else {
                req.decodedToken = decodedToken;
                req.authenticated = true;
                return next();
            }
        });

    } catch (err) {
        res.json({error: err.message})
        throw new customApiError(err.message, 400)
    }
};

module.exports = {createTokens, validateToken};