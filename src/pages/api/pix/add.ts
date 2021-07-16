import { connectToDatabase } from '../../../shared/utils/mongodb'

import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const data = req.body

  db
    .collection('pix')
    .insert(data)

  return res.status(200).json(data)
}

export default handler
