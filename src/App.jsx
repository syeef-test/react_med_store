import { useState } from "react";
import "./App.css";
import AddMedcine from "./components/AddMedcine.jsx";
import Inventory from "./components/Inventory.jsx";
import MedcineProvider from "./store/MedcineProvider.jsx";
import MedcineInventoryProvider from "./store/MedcineInventoryProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MedcineProvider>
        <h1>Medicine Store</h1>
        <AddMedcine />
        <MedcineInventoryProvider>
          <Inventory />
        </MedcineInventoryProvider>
      </MedcineProvider>
    </>
  );
}

export default App;
