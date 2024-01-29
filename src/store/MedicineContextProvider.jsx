import React, { useContext, useState, useEffect } from "react";
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
      // update already existing order
      let updatedMedItems = [...items];
      updatedMedItems[existingItemIndex].quantity += Number(newItem.quantity);
      setItems(updatedMedItems);
    } else {
      // new order, simply insert data
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

  const addItemByOneHandler = (newItem) => {
    console.log("called in  med context add item");
    const existingItemIndex = items.findIndex(
      (item) => item.med_name === newItem.med_name
    );

    if (existingItemIndex !== -1) {
      // update already existing order
      let updatedMedItems = [...items];
      updatedMedItems[existingItemIndex].quantity += 1;
      setItems(updatedMedItems);
    } else {
      // new order, simply insert data
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeItemByOneHandler = (newItem) => {
    console.log("called in  med context remove item");
    const prevMedList = [...items];

    const existingItemIndex = prevMedList.findIndex(
      (item) => item.med_name === newItem.med_name
    );

    if (
      existingItemIndex !== -1 &&
      prevMedList[existingItemIndex].quantity > 0
    ) {
      let updateQuantity = Number(prevMedList[existingItemIndex].quantity);
      if (updateQuantity > 0) {
        updateQuantity = updateQuantity - 1;
        const updatedMed = [...prevMedList];
        updatedMed[existingItemIndex] = {
          ...updatedMed[existingItemIndex],
          quantity: updateQuantity,
        };
        setItems(updatedMed);
      }
    }
  };

  useEffect(() => {
    console.log("medicine:", items);
  }, [items]); // Log the updated state whenever 'items' changes

  const medicineContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemhandler,
    addItemByOne: addItemByOneHandler,
    removeItemByOne: removeItemByOneHandler,
  };

  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineContextProvider;
