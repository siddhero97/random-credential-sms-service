const generateRandomString = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateRandomEmail = () => {
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
    const localPart = generateRandomString(10);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${localPart}@${domain}`;
};

const generateRandomPassword = () => {
    return generateRandomString(12);
};

module.exports = { generateRandomEmail, generateRandomPassword };
