import React from 'react'
import "./Header.css"
import mainPhoto from './pics/webdev.png'

const Header = () => {

  return (
    <div className='main-container'>
    <h1 className='main-title'>Max Lythgoe</h1>
    <img src={mainPhoto} alt='webdev'></img>
    </div>
  )
}

export default Header