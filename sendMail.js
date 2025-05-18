import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config()

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ffcars.websystem@gmail.com",
        pass: process.env.GMAIL_SECRET
    }
});
const sendMail = (data) => {
    const mailOptions = {
        from: "ffcars.websystem@gmail.com",
        to: "kubko.kratochvil@gmail.com",
        subject: data.subject,
        text: data.message,
    }
    transport.sendMail(mailOptions, (err,info) => {
        if (err) {
            return err
        }
        return info
    });
}

export default { sendMail };