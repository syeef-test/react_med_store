import React from "react";

const MedcineInventory = React.createContext({
  items: [],
  updateItem: (item) => {},
  quantity: 0,
});

export default MedcineInventory;
