
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type Definitions for EmailData
type EmailData = {
    from : string,
    subject : string,
    message : string
}

// POST Route 
export async function POST(data : EmailData) {

    try {

        const { from, subject, message } = data;

        // Create the Transport service
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
        
        await transport.sendMail(mailOptions);

        return NextResponse.json({ status: 200 });
    } catch(error) {
        console.log(error);

        return NextResponse.json({ status: 500 });
    }
}