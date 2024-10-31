import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "5aaa9dfdd87cc2eefb2bf67eba0f1c9a",
  },
});

export const GET = () => {
  return NextResponse.json({ message: "Welcome to the mail API" });
};

export const POST = async (req) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "josephchukwuka4@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return NextResponse.json({
        message: "Error sending email",
        status: false,
      });
    } else {
      console.log("Email sent: " + info.response);
      return NextResponse.json({
        message: "Email sent successfully",
        status: true,
      });
    }
  });
};
