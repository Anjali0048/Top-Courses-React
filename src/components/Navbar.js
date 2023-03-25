import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className='bg-bgDark py-4 '>
        <h2 className='text-white text-center'>{props.title}</h2>
      </nav>
    </div>
  )
}

export default Navbar
