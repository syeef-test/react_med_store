import React, { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";
import MedicineContext from "./medicine-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const medContext = useContext(MedicineContext);

  const addItemToCartHandler = (newItem) => {
    console.log("cart item add called", newItem);

    const existingItemIndex = items.findIndex(
      (item) => item.med_name === newItem.med_name
    );

    if (existingItemIndex !== -1) {
      // update already existing order
      let updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity += Number(newItem.quantity);
      updateItems(updatedCartItems);
    } else {
      // new order, simply insert data
      updateItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const addItemByOneHandler = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.med_name === newItem.med_name
    );

    //change
    if (medContext.items[existingItemIndex].quantity > 0) {
      if (existingItemIndex !== -1) {
        // update already existing order
        let updatedCartItems = [...items];
        updatedCartItems[existingItemIndex].quantity += 1;
        updateItems(updatedCartItems);
      } else {
        // new order, simply insert data
        updateItems((prevItems) => [...prevItems, newItem]);
      }
    }
  };

  const removeItemToCartHandler = (newItem) => {
    console.log("cart item remove called", newItem);

    const existingItemIndex = items.findIndex(
      (item) => item.med_name === newItem.med_name
    );

    if (existingItemIndex !== -1 && items[existingItemIndex].quantity > 0) {
      // update already existing order
      let updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity -= 1;

      // Check if the quantity is greater than 0 before updating
      if (updatedCartItems[existingItemIndex].quantity > 0) {
        updateItems(updatedCartItems);
        const newitem = {
          ...newItem,
          quantity: 1,
        };
      } else {
        // Remove the item if quantity is 0
        updateItems(
          updatedCartItems.filter((_, index) => index !== existingItemIndex)
        );
      }
    }
  };

  useEffect(() => {
    console.log("cart:", items);
  }, [items]); // Log the updated state whenever 'items' changes

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    addItemByOne: addItemByOneHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
