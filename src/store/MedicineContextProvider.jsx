import React, { useContext, useState } from "react";
import MedicineContext from "./medicine-context";
import CartContext from "./cart-context";

const MedicineContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const cartContext = useContext(CartContext);

  const addItemHandler = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.med_name === newItem.med_name
    );

    if (existingItemIndex !== -1) {
      //update allready exist order
      let updatedMedItems = [...items];
      updatedCartItems[existingItemIndex].quantity =
        Number(updatedCartItems[existingItemIndex].quantity) +
        Number(newItem.quantity);
      setItems(updatedCartItems);
    } else {
      //new order simply insert data
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeItemhandler = (newItem) => {
    const prevMedList = [...items];

    const existingItemIndex = prevMedList.findIndex(
      (item) => item.med_name === newItem.med_name
    );

    if (existingItemIndex !== -1) {
      let updateQuantity = Number(prevMedList[existingItemIndex].quantity);
      if (updateQuantity > 0) {
        updateQuantity = updateQuantity - 1;
        const updatedMed = [...prevMedList];
        updatedMed[existingItemIndex] = {
          ...updatedMed[existingItemIndex],
          quantity: updateQuantity,
        };
        setItems(updatedMed);
        const newitem = {
          ...updatedMed[existingItemIndex],
          quantity: 1,
        };
        cartContext.addItem(newitem);
      }
    }
  };

  const medicineContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemhandler,
  };

  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineContextProvider;
