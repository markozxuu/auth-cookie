const Cookies = require('cookies');
const ms = require('ms');

module.exports = (req, res) => {
    const cookies = new Cookies(req, res, { keys: ['gary600'] });
    const dummyData = { name: 'Markoz' };
    cookies.set('from-user-google', JSON.stringify(dummyData), {
        domain: 'auth-cookie.justinmark.now.sh',
        maxAge: ms('1y')
    });
    res.writeHead(303, { Location: '/' });
    res.end();
};
