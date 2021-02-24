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


const InvitationEmailContent = fs.readFileSync(path.join(__dirname, `/../resources/notify-register.html`), "utf-8").toString();
const InvitationTemplate = handlebars.compile(InvitationEmailContent);
module.exports.mailInvitation = functions.firestore.document('/invitation/{uid}').onCreate(async snap=> {
    const data = snap.data();
    const client = (await admin.firestore().collection('users').where('cedula','==', data.referer).get()).data();
    return data.emails.forEach(async email=>{
        await mail.sendMail({
            from: '"Dimelo.vip" <no-reply@dimelo.vip>',
            to: email,
            subject: `${client.name} ${client.lastname} te ha invitado a dimelo.vip`,
            html: InvitationTemplate({
                name:`${client.name} ${client.lastname}`,
                link:'https://dimelo.vip/signup/'+btoa(client.cedula),
            }),
        });
    });
});