const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/send-email', (req, res) => {
  const { name, email, message, contactNo } = req.body; // Include contactNo in the destructuring
  console.log(req);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: 'danielteslerv@gmail.com',
    to: 'danielteslerv@gmail.com',
    subject: 'New contact form submission',
    text: `Name: ${name}\nEmail: ${email}\nContact Info: ${contactNo}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
