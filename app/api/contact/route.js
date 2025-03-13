// app/api/contact/route.js
import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const formData = await request.json();
        const {name, email, company, phone, locations, message} = formData;

        // Create Gmail transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log('Setting up email with credentials:', {
            fromEmail: process.env.EMAIL_USER,
            toEmail: process.env.RECIPIENT_EMAIL,
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Locations:</strong> ${locations || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        };

        // Send email and wait for the result
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

        // Return proper response format for Next.js App Router
        return NextResponse.json({success: true, message: 'Email sent successfully'});
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {success: false, error: error.message},
            {status: 500}
        );
    }
}
