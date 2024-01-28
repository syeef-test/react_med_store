import React, { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";
import MedicineContext from "./medicine-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const medContext = useContext(MedicineContext);

  const addItemToCartHandler = (newItem) => {
    console.log("cart item add called", newItem);

    const existingItemIndex = items.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      //update already existing order
      let updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity =
        Number(updatedCartItems[existingItemIndex].quantity) +
        Number(newItem.quantity);
      updateItems(updatedCartItems);
    } else {
      //new order simply insert data
      updateItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeItemToCartHandler = (newItem) => {
    console.log("cart item remove called", newItem);

    const existingItemIndex = items.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      //update already existing order
      let updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity =
        Number(updatedCartItems[existingItemIndex].quantity) - 1;

      updateItems(updatedCartItems);
      const newitem = {
        ...updatedCartItems[existingItemIndex],
        quantity: 1,
      };
      medContext.addItem(newitem);
    }
  };

  useEffect(() => {
    console.log("cart:", items);
  }, [items]); // Log the updated state whenever 'items' changes

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
