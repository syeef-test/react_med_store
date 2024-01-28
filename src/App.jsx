import { useState } from "react";
import "./App.css";
import AddMedicine from "./components/AddMedicine";
import MedicineList from "./components/MedicineList";
import MedicineContextProvider from "./store/MedicineContextProvider";

function App() {
  return (
    <>
      <h1>Medicine Store</h1>
      <MedicineContextProvider>
        <AddMedicine />
        <MedicineList />
      </MedicineContextProvider>
    </>
  );
}

export default App;
