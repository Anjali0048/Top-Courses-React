import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex flex-col item-center space-y-2'>
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

export default Spinner
