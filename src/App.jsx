import { useState } from "react";
import "./App.css";
import AddMedcine from "./components/AddMedcine.jsx";
import Inventory from "./components/Inventory.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Medcine Store</h1>
      <AddMedcine />
      <Inventory />
    </>
  );
}

export default App;
