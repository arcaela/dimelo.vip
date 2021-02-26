const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const { functions, mail } = require('../config');



const WelcomeEmailContent = fs.readFileSync(path.join(__dirname, `/../resources/notify-register.html`), "utf-8").toString();
const WelcomeTemplate = handlebars.compile(WelcomeEmailContent);
module.exports.mailWelcome = functions.firestore.document('/users/{uid}').onCreate(async (snap) => {
    const client = snap.data();
    return mail.sendMail({
        from: '"Dimelo.vip" <no-reply@dimelo.vip>',
        to: client.email,
        subject: `${client.name} bienvenido a dimelo.vip`,
        html: WelcomeTemplate(client),
    });
});