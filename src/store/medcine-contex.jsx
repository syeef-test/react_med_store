import React from "react";

const MedcineContext = React.createContext({
  items: [],
  addItem: (item) => {},
});

export default MedcineContext;
