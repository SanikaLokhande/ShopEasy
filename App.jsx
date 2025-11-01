import React, { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { cartContext } from './context/cartContext.js'

function App() {

  const [cartCount, setCartCount] = useState(0)
  
  return (
    <div>
      <cartContext.Provider value={{cartCount, setCartCount}}>
      <Header />
      <ProductList />
      </cartContext.Provider>
    </div>
  )
}

export default App
