import React, { useState } from "react";
import MedcineContext from "../store/medcine-contex.jsx";

const MedcineProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addItemHandler = (newItem) => {
    updateItems((prevItems) => [...prevItems, newItem]);
    console.log("called");
  };

  const medcineContext = {
    items: items,
    quantity: 0,
    addItem: addItemHandler,
  };

  return (
    <MedcineContext.Provider value={medcineContext}>
      {props.children}
    </MedcineContext.Provider>
  );
};

export default MedcineProvider;
