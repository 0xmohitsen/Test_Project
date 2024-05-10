import React from 'react'
import { useRef } from 'react'
import Inputs from './Inputs'

const IDcard = ({forClose}) => {
  const modelref = useRef()
    const closeModel=(e) => {
        if(modelref.current === e.target){
          forClose();
        }
    }
  return (
    <div ref={modelref} onClick={closeModel} className='text-5xl fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <Inputs/>

    </div>
  )
}

export default IDcard