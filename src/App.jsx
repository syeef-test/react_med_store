import { useState, useContext } from "react";
import "./App.css";
import AddMedicine from "./components/AddMedicine";
import MedicineList from "./components/MedicineList";
import MedicineContextProvider from "./store/MedicineContextProvider";
import CartModal from "./components/UI/CartModal.jsx";
import CartContext from "./store/cart-context.jsx";
import CartProvider from "./store/CartProvider.jsx";

function App() {
  const cartContext = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>Medicine Store</h1>

      <CartProvider>
        <button onClick={openModal}>Open Cart</button>
        <MedicineContextProvider>
          <AddMedicine />
          <MedicineList />

          <CartModal isOpen={isModalOpen} closeModal={closeModal} />
        </MedicineContextProvider>
      </CartProvider>
    </>
  );
}

export default App;
