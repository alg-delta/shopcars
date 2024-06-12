import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Info from "./components/Info";
import data from "./data";

import { useState } from "react";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };
  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

  const buy = () => {
    setCartItems([]);
    alert("Ваше замовлення прийнято");
  };
  return (
    <div className="App">
      <Header />
      <div>
        <Main products={data} add={add} />
        <Cart cartItems={cartItems} add={add} remove={remove} buy={buy} />
        <Info />
      </div>
    </div>
  );
}

export default App;
