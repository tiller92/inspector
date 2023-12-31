import { NextApiRequest, NextApiResponse } from 'next'; 
import nodemailer from 'nodemailer'; 

type ParsedData = {
  name: string;
  email: string;
  location: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: ParsedData = JSON.parse(req.body as string)
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      auth: {
        user: process.env.USERNAME,
        pass:  process.env.PASSWORD,
        },
      })
    console.log(data,'server')
    const mailOptions = {
        from: 'testinspectortest@outlook.com',
        to: process.env.CHASEEMAIL,
        subject: 'Inspection lead',
        text: data.message, 
      };
  try{
    transporter.sendMail(mailOptions)
      .then((info)=> {console.log(info)})
      .catch((error)=> {
        console.log(error)
        throw error
    })
    res.status(200).json({text: data}); 
  }catch(e){
    console.log(e)
    res.status(304).json({error: e}); 
  }
}



