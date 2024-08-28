// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';
import { promisify } from 'util';

const Solution = () => {
  // Create a transporter using the provided email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj',
    },
  });

  // Promisify the sendMail function
  const sendMailAsync = promisify(transporter.sendMail.bind(transporter));

  // Create an interface to prompt the user for input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Ask the user to enter the recipient's email address
  rl.question("Please enter the recipient's email address: ", async (recipientEmail) => {
    // Define the email options
    const mailOptions = {
      from: 'codingninjas2k16@gmail.com',
      to: recipientEmail,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!',
    };

    try {
      // Send the email and await the response
      const info = await sendMailAsync(mailOptions);
      console.log('Email sent successfully:', info.response);
    } catch (error) {
      // Handle any errors that occur during sending
      console.error('Error sending email:', error);
    } finally {
      // Close the readline interface
      rl.close();
    }
  });
};

export default Solution;
