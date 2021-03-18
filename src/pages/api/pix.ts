import { NextApiRequest, NextApiResponse } from "next";
import { PixItemInterface } from "src/shared/types/pix";

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  const infoItems: PixItemInterface[] = [
    {
      name: 'Cleiton',
      description: null,
      pix: [
        {
          type: 1,
          title: 'CPF',
          value: '299.067.908-14',
          description: 'Banco Inter'
        },
        {
          type: 2,
          title: 'E-mail',
          value: 'cleiton_jc@yahoo.com.br',
          description: null
        }
      ]
    },
    {
      name: 'Edson Henrique',
      description: 'Sobrinho',
      pix: [
        {
          type: 1,
          title: 'E-mail',
          value: '255.264.154-24',
          description: null
        }
      ]
    },
    {
      name: 'Teste',
      description: 'Um teste',
      pix: [
        {
          type: 3,
          title: 'Código',
          value: '29HF94H0CHS',
          description: 'Código gerado aleatóriamente'
        }
      ]
    }
  ]

  return res.status(200).json(infoItems)
}

export default handler
