export default class EmailService {
  // emailFrom = import.meta.env.VITE_AUTH_USER
  // authUserEmail = import.meta.env.VITE_AUTH_USER
  // authPassword = import.meta.env.VITE_AUTH_PASSWORD

  constructor() {}

  // createTransporter() {
  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: this.emailFrom,
  //       pass: this.emailFromauthPassword,
  //     },
  //   })
  //   return transporter;
  // }

  // async sendMail(subject, message, to) {
  //   const transporter = this.createTransporter()
  //   const info = await transporter.sendMail({
  //     from: this.emailFrom,
  //     to: this.to || this.emailFrom,
  //     subject: subject,
  //     text: message,
  //     html: `<p>${message}</p>`,
  //   })
  //   console.log('Message sent %s', info.messageId)
  // }
}
