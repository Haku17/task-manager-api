const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jordanwebb.alt@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you like the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jordanwebb.alt@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}