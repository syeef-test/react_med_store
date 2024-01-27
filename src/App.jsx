import { useState } from "react";
import "./App.css";
import AddMedcine from "./components/AddMedcine.jsx";
import Inventory from "./components/Inventory.jsx";
import MedcineProvider from "./store/MedcineProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MedcineProvider>
        <h1>Medcine Store</h1>
        <AddMedcine />
        <Inventory />
      </MedcineProvider>
    </>
  );
}

export default App;
