const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {

    const { headers: { cookie } } = req;
    if (cookie != undefined) {
        if (cookie && cookie.split('=')[0] === 'Token') {
            return cookie.split('=')[1];
        }
    }
    return null;
};

const auth = {
    required: jwt({
        secret: process.env.SECRET,
        algorithms: ['HS256'],
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
    }),
    optional: jwt({
        secret: process.env.SECRET,
        algorithms: ['HS256'],
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),
};

module.exports = auth;