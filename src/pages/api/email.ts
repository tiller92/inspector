import { NextApiRequest, NextApiResponse } from 'next'; 
import nodemailer from 'nodemailer'; 
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body) 
    console.log(body['message'])
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
        to: process.env.CHASEEMAIL,
        subject: 'Inspection lead',
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




