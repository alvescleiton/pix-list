import React from 'react'
import { PixListContext } from '@/context/PixListProvider'

export const usePixList = () => React.useContext(PixListContext)
