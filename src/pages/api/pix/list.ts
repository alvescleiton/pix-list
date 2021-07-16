import { connectToDatabase } from '../../../shared/utils/mongodb'

import { NextApiRequest, NextApiResponse } from "next"
import { PixItemInterface } from "src/shared/types/pix"

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()

  const infoItems: PixItemInterface[] = await db
    .collection('pix')
    .find({})
    .toArray()

  return res.status(200).json(infoItems)
}

export default handler
