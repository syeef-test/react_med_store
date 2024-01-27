import React, { useState } from "react";
import MedcineContext from "../store/medcine-contex.jsx";

const MedcineProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemHandler = (newItem) => {
    updateItems((prevItems) => [...prevItems, newItem]);
    // console.log("called");
  };

  const medcineContext = {
    items: items,
    addItem: addItemHandler,
  };

  return (
    <MedcineContext.Provider value={medcineContext}>
      {props.children}
    </MedcineContext.Provider>
  );
};

export default MedcineProvider;
