// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Replace these with your actual email credentials and settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'clayharrison8@gmail.com',
      pass: '18JzmlHLE7Tm'
    }
  });

  const mailOptions = {
    from: 'clayharrison8@gmail.com',
    to: 'clayharrison8@pm.me', // Replace with the email address where you want to receive the contact form data
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to send the email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


