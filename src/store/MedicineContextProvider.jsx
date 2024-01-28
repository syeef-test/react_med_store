import React, { useContext, useState } from "react";
import MedicineContext from "./medicine-context";

const MedicineContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
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
