import React from "react";
import Modal from "react-modal";

const CartModal = ({ isOpen, closeModal, cartItems }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Cart Modal"
    >
      <h2>Cart Items</h2>
      <ul>
        {console.log(cartItems)}
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.med_name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CartModal;
