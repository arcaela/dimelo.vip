const { functions } = require('./config');
const mailTransport = require('nodemailer').createTransport({
    service: 'gmail',
    auth: { user: 'arcaela16@gmail.com', pass: 'clthzjmuvckslvry', },
});
const EmailContent = require('fs').readFileSync(require('path').join(__dirname, `/resources/notify-register.html`), "utf-8").toString();
module.exports = functions.firestore.document('/users/{uid}').onCreate(async (snap) => {
    const client = snap.data();
    const template = require('handlebars').compile(EmailContent);
    return mailTransport.sendMail({
        from: '"Dimelo.vip" <no-reply@dimelo.vip>',
        to: client.email,
        subject: `${client.name} bienvenido a dimelo.vip`,
        html: template(client),
    });
});

