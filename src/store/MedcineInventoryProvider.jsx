import React, { useContext, useState } from "react";
import MedcineInventory from "./medcine-inventory";
import MedcineContext from "./medcine-contex";

const MedcineInventoryProvider = (props) => {
  const [items, updateItems] = useState([]);
  const medConext = useContext(MedcineContext);
  //   const [quantity, setQuantity] = useState(0);

  const updateItemHandler = (newItem) => {
    console.log("called update in inventory");
    const medcine = [...medConext.items];

    const existingItemIndex = medcine.findIndex(
      (item) => item.medname === newItem.medname
    );

    if (existingItemIndex !== -1) {
      let updatedQuantity = medcine[existingItemIndex].quantity;

      if (updatedQuantity > 1) {
        updatedQuantity -= 1;

        // new array with the modified item
        const updatedItems = [...medcine];
        updatedItems[existingItemIndex].quantity = updatedQuantity;

        updateItems(updatedItems);
        console.log(items);
      } else {
        // new array without the removed item
        const updatedItems = updatedCartItems.filter(
          (_, index) => index !== existingItemIndex
        );
        console.log(items);

        updateItems(updatedItems);
      }
    }

    console.log(existingItemIndex);
  };

  const medcineInventoryContext = {
    items: items,
    updateItem: updateItemHandler,
    quantity: 0,
  };

  return (
    <MedcineInventory.Provider value={medcineInventoryContext}>
      {props.children}
    </MedcineInventory.Provider>
  );
};

export default MedcineInventoryProvider;
