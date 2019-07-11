const Cookies = require('cookies');

module.exports = (req, res) => {
    const cookies = new Cookies(req, res, { keys: ['gary600'] });
    cookies.set('from-user-google', {
        domain: 'auth-cookie.justinmark.now.sh',
        maxAge: Date.now()
    });
    res.writeHead(303, { Location: '/' });
    res.end();
};
