import React, { useState } from "react";
import MedcineContext from "./medcine-contex";

const MedcineProvider = (props) => {
  const [items, updateItems] = useState([]);
  const addItemtHandler = (newItem) => {};

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
