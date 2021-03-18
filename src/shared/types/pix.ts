export type PixItemInterface = {
  name: string
  description: string | null
  pix: PixInfoInterface[]
}

export type PixInfoInterface = {
  type: number
  title: string
  value: string
  description?: string
}
