import React, { useContext, useEffect, useState } from "react";
import MedcineContext from "../store/medcine-contex.jsx";
import MedcineInventory from "../store/medcine-inventory.jsx";

export default function Inventory() {
  const medContext = useContext(MedcineContext);
  const medInventoryContext = useContext(MedcineInventory);

  const [cart, setCart] = useState(0);

  // useEffect(() => {
  //   const calculateCartItem = () => {
  //     const prevItems = [...medContext.items];
  //     const calculatedCartItems = medInventoryContext.items.reduce(
  //       (total, item) => Number(total) + Number(item.quantity),
  //       0
  //     );
  //     setCart(calculatedCartItems);
  //   };

  //   calculateCartItem();
  // }, [medInventoryContext.items]);

  const decreaseQuantityHandler = (item) => {
    medInventoryContext.updateItem(item);
    console.log(item);
  };

  const cartItems = (
    <ul>
      {medContext.items.map((item) => (
        <li key={item.id}>
          Name: {item.medname} Description:{item.desc} Quantity:{item.quantity}
          <button onClick={() => decreaseQuantityHandler(item)}>-</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      Inventory Cart: {cart}
      <br />
      <div>{cartItems}</div>
    </div>
  );
}
