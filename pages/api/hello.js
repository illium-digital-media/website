export {};

// Your existing code here...
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/send-email', (req, res) => {
  // Your route handling code here
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
