import React from 'react'
import { PixListContext } from 'src/context/PixList'

export const usePixList = () => React.useContext(PixListContext)
