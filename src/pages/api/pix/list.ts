import { NextApiRequest, NextApiResponse } from "next";
import { PixItemInterface } from "src/shared/types/pix";

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  const infoItems: PixItemInterface[] = [
    {
      name: 'Cleiton',
      description: null,
      type: 1,
      pixKey: '299.067.908-14'
    },
    {
      name: 'Edson Henrique',
      description: 'Sobrinho',
      type: 1,
      pixKey: '255.264.154-24',
    }
  ]

  return res.status(200).json(infoItems)
}

export default handler
