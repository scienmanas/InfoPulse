import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router()

router.post('/send-email', async (req, res) => {

    // Get the body data
    const { toName = "", toEmail, subject, message } = req.body;

    try {

        // creater a transporter
        const transporter = nodemailer.createTransport({
            host: 'gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        });

        // Send the mail
        const info = await transporter.sendMail({
            from: `Manas <${process.env.EMAIL}>`,
            to: `${toName} <${toEmail}>`,
            subject: subject,
            text: message,
        })

        res.status(200).json({
            message: "Successfully emailed"
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }

})


export default router;