import { connectToDatabase } from '../../../shared/utils/mongodb'

import { NextApiRequest, NextApiResponse } from "next"
import { ObjectId } from 'mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const data = req.body

  const myquery = { _id: new ObjectId(data._id) }
  const newvalues = {
    $set: {
      name: data.name,
      description: data.description,
      type: data.type,
      pixKey: data.pixKey
    }
  }

  db
    .collection('pix')
    .updateOne(
      myquery,
      newvalues
    )

  return res.status(200).json(data)
}

export default handler
