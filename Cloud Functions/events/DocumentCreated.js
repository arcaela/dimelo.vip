const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const { admin, functions, mail } = require('../config');



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
module.exports.mailInvitation = functions.firestore.document('/invitations/{uid}').onCreate(async snap=> {
    const invitation = snap.data();
    const client = (await admin.firestore().collection('users').where('dni','==', invitation.referer).get()).data();
    return invitation.emails.forEach(async email=>{
        mail.sendMail({
            from: '"Dimelo.vip" <no-reply@dimelo.vip>',
            to: email,
            subject: `${client.name} ${client.lastname} te ha invitado a dimelo.vip`,
            html: InvitationTemplate({
                name:`${client.name} ${client.lastname}`,
                link:'https://dimelo.vip/signup/'+btoa(client.dni),
            }),
        });
    });
});