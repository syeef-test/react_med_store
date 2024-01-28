import React, { useContext } from "react";
import Modal from "react-modal";
import CartContext from "../../store/cart-context";

const CartModal = ({ isOpen, closeModal }) => {
  const cartContext = useContext(CartContext);

  const handleIncreaseQuantity = (item) => {};

  const handleDecreaseQuantity = (item) => {
    cartContext.removeItem(item);
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
