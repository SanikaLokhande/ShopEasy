import React, { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

function Product(props) {

  const [productCount, setProductCount] = useState(0)
  const { setCartCount } = useContext(cartContext)

  function increment(){
    setProductCount(prev => prev + 1)
    setCartCount(prev => prev + 1)
  }

  function decrement(){
    setProductCount((prev) => {
      if(prev === 0){
        return(prev)
      } else{
        return(prev - 1)
      }
      
    })
     setCartCount((prev) => {
      if(prev === 0){
        return(prev)
      } else{
        return(prev - 1)
      }
      
    })
  }
  

  function incrementCartcount(){
    setCartCount(prev => prev + 1)
  }

  return (
    <div className='product'>
      <img src={props.image} alt=""></img>
      <h2>{props.name}</h2>
      <p>{props.price} Rs.</p>
      <div className="product-count">
        <button onClick={decrement}> - </button>
        <p> {productCount} </p>
        <button onClick={increment}> + </button>
      </div>
    </div>
  )
}

export default Product
