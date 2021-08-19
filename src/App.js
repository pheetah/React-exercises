import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import ShopCart from './components/cart/ShoppingCart';
import MyCartProvider from './store/cart-provider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <MyCartProvider>
      {cartIsShown && <ShopCart onClose={hideCartHandler}></ShopCart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
    </MyCartProvider>
  );
}

export default App;
