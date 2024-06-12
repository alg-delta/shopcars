import React from "react";
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button";

export default function Cart(props) {
  const { cartItems, add, remove, buy } = props;
  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.number * product.price, 0
  );
  return (
    <Alert variant="warning">
      <Alert.Heading>Корзина</Alert.Heading>
      {cartItems.length === 0 && <p>Корзина порожня</p>}

      <table className="table">
        <tr>
          <td width="25%">Назва</td>
          <td width="25%">Кількіть</td>
          <td width="25%">Ціна</td>
          <td width="25%">Всього</td>
        </tr>
        {cartItems.map((product) =>
          <tr>
            <td width="25%">{product.name}</td>
            <td width="25%">
              <Button onClick={() => remove(product)} variant="succes">-</Button>
              <Button onClick={() => add(product)} variant="succes">+</Button>
              {product.number}
            </td>

            <td width="25%">{product.price}</td>
            <td width="25%">{product.number * product.price}грн</td>
          </tr>
        )}
      </table>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">Всього до сплати{totalPrice}грн</p >
      <Button onClick={buy} disabled={cartItems.length === 0} variant="warning" >
        Оформити замовлення
      </Button >


    </Alert >
  )
};


