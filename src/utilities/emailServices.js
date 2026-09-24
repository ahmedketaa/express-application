

import nodemailer from "nodemailer";
import jwt from 'jsonwebtoken'
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
   // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "ahmed.abdelmawgood200@gmail.com",
    pass: "nuyd uokd mmjg tmio",
  },
  tls:{
    rejectUnauthorized:false
  }
});



export const sendEmail =async(email)=>{
    const encryptedMail = jwt.sign({email:email},"emailIti")

    try {
  const info = await transporter.sendMail({
    from: '"ITIG3 <ahmed.abdelmawgood200@gmail.com>', // sender address
    to: email, // list of recipients
    subject: "Hello", // subject line
    text: "Hello world?", // plain text body
    html: `<b>Hello world? <a href='http://localhost:3000/user/verify/${encryptedMail}'>verify</a></b>`, // HTML body

  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
}
}