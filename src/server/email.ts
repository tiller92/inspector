import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("***************** body",res.body)

  res.status(200).json({ text: 'Hello from server' })

}
