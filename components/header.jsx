import React from 'react'

const Header = () => {
  return (
    <div className='container mx-auto py-4 pt-28 h-screen'>
      <div className='tracking-[.12em] text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      MANIFESTO
      </div>
      <br/>
      <p className='text-center text-xl font-bold text-[#2C2C2C] tracking-wider'>Make your <span className='text-[#BD279C]'>URL</span> easier to remember.</p>
    </div>
  )
}

export default Header