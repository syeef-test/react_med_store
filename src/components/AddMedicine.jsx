import React, { useContext } from "react";
import MedicineContext from "../store/medicine-context";

function AddMedicine() {
  const medContext = useContext(MedicineContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const medData = {
      id: Math.random(),
      med_name: formData.get("med_name"),
      desc: formData.get("desc"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    };
    medContext.addItem(medData);
    console.log(medContext);
  };
  return (
    <div>
      AddMedicine
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="med_name"
            id="med_name"
            placeholder="Enter Medicine Name"
          />
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Enter Medicine Description"
          />
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter Medicine Price"
          />
          <input
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Enter Medicine Quantity"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddMedicine;
