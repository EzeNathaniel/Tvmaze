import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

export default function Spinner() {
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
    <MutatingDots 
    height="100"
    width="100"
    color="#4fa94d"
    secondaryColor= '#4fa94d'
    radius='12.5'
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
   />
   </div>
  )
}