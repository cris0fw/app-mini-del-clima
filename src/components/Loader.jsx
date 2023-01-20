import React from 'react'
import { DotSpinner } from '@uiball/loaders'

const Loader = () => {
  return (
    <DotSpinner 
    size={40}
    speed={0.9} 
    color="white" 
   />
  )
}

export default Loader