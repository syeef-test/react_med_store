import React, { useContext, useEffect } from "react";
import Modal from "react-modal";
import CartContext from "../../store/cart-context";
import MedicineContext from "../../store/medicine-context";

const CartModal = ({ isOpen, closeModal }) => {
  const cartContext = useContext(CartContext);
  const medContext = useContext(MedicineContext);

  const handleIncreaseQuantity = (item) => {
    cartContext.addItemByOne(item);
    medContext.removeItemByOne(item);
    console.log("decresae med in medicine context", item);
  };

  const handleDecreaseQuantity = (item) => {
    cartContext.removeItem(item);
    medContext.addItemByOne(item);
    console.log("increase med in medicine context", item);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Cart Modal"
    >
      <h2>Cart Items</h2>
      <ul>
        {cartContext.items.map((item) => (
          <li key={item.id}>
            {item.med_name} - Quantity: {item.quantity}
            <button onClick={() => handleIncreaseQuantity(item)}>
              Increase
            </button>
            <button onClick={() => handleDecreaseQuantity(item)}>
              Decrease
            </button>
          </li>
        ))}
      </ul>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CartModal;
