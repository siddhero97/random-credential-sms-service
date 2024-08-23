const twilio = require('twilio');
require("dotenv").config()
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

const client = twilio(accountSid, authToken);

const sendSms = (from,to, body) => {
    return client.messages.create({
        body: body,
        to: to,
        from: from
    });
};

module.exports = sendSms;
