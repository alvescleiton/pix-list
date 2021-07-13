import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body

  return res.status(200).json(body)
}

export default handler
