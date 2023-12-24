import { NextApiRequest, NextApiResponse } from 'next'; 
import nodemailer from 'nodemailer'; 
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body
  // needs to send an email and make sure no malware gets sent to chases email
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      auth: {
        user: process.env.USERNAME,
        pass:  process.env.PASSWORD,
      },
    })
    const mailOptions = {
        from: 'testinspectortest@outlook.com',
        to: 'ryantiller6@gmail.com',
        subject: 'teeest wooooooo',
        text: 'That was easy!'
      };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  res.status(200).json({ text: 'Hello' })

}




