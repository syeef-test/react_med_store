import React from "react";

const MedcineContext = React.createContext({
  items: [],
  addItem: (item) => {},
  quantity: 0,
});

export default MedcineContext;
