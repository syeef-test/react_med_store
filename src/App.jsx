import { useState, useContext } from "react";
import "./App.css";
import AddMedicine from "./components/AddMedicine";
import MedicineList from "./components/MedicineList";
import MedicineContextProvider from "./store/MedicineContextProvider";
import CartModal from "./components/UI/CartModal.jsx";
import MedicineContext from "./store/medicine-context.jsx";

function App() {
  const medContext = useContext(MedicineContext);
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
      <button onClick={openModal}>Open Cart</button>
      <MedicineContextProvider>
        <AddMedicine />
        <MedicineList />

        <CartModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          cartItems={medContext.items}
        />
      </MedicineContextProvider>
    </>
  );
}

export default App;
