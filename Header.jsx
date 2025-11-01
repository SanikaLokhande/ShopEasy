import React from 'react'
import cartIcon from '../assets/cart.png'
import './Header.css'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

function Header() {

  const { cartCount } = useContext(cartContext)
  return (
    <header>
        <h1>ShopEasy</h1>  
       <div className='cart'>
         <img src={cartIcon} alt="cart icon" />
         <div>{cartCount}</div>
       </div>
    </header>
  )
}

export default Header
