import React from "react";

const MedicineContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  addItemByOne: (item) => {},
  removeItemByOne: (item) => {},
});

export default MedicineContext;
