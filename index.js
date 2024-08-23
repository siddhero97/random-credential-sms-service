const express = require('express');
const path = require('path');
const { generateRandomEmail, generateRandomPassword } = require('./utils/generateCredentials');
const sendSms = require('./services/sendSms');
require("dotenv").config()
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/send-credentials', async (req, res) => {
    const { phone } = req.query;

    // if (!phone) {
    //     return res.status(400).send('Phone number is required');
    // }

    const email = generateRandomEmail();
    const password = generateRandomPassword();
    const message = `Your random credentials:\nEmail: ${email}\nPassword: ${password}`;

    const to = phone || process.env.to

    try {
        await sendSms(process.env.from, to, email);
        await sendSms(process.env.from, to, password);
        res.status(200).send('Credentials sent successfully!');
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).send('Failed to send credentials');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
