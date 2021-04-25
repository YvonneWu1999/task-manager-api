const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yvonnedevelop@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Have fun!`

    })
}
const cancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yvonnedevelop@gmail.com',
        subject: 'GoodBye!',
        text: `Hope we can meet again in the future, ${name}. 👋!`

    })
}
module.exports = {
    sendWelcomeEmail,
    cancelEmail
}