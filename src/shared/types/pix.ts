export type PixListInterface = {
  name: string
  description: string | null
  pix: PixInterface[]
}

export type PixInterface = {
  type: number
  title: string
  value: string
  description?: string
}
