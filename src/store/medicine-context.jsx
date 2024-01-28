import React from "react";

const MedicineContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default MedicineContext;
