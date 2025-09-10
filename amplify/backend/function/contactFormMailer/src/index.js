const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, company, phone, locations, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: 'email-smtp.us-east-1.amazonaws.com', // Or your SES region's endpoint
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.RECIPIENT_EMAIL,
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

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};