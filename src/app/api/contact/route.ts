
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import winston, { transport } from 'winston';

/*
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});
*/

type EmailData = {
    from : string,
    subject : string,
    message : string
}

export async function POST(data : EmailData) {

    try {

        const { from, subject, message } = data;

        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port : Number(process.env.EMAIL_PORT),
            secure: false,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD
            }
        });

        const mailOptions = {
            from: from,
            to: process.env.RECIPIENT_EMAIL,
            subject: subject,
            html: message,
            message: message
        }

        // logger.info(`Sending Email to: ${to}`);
        
        await transport.sendMail(mailOptions);

        return NextResponse.json({ status: 200 });
    } catch(error) {
        console.log(error);

        return NextResponse.json({ status: 500 });
    }
}