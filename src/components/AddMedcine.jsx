import React, { useContext, useState } from "react";
import MedcineContext from "../store/medcine-contex.jsx";

function AddMedcine() {
  const medContext = useContext(MedcineContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const medname = formData.get("medname");
    const desc = formData.get("desc");
    const price = formData.get("price");
    const quantity = formData.get("quantity");

    const item = {
      id: Math.random(),
      medname: medname,
      desc: desc,
      price: price,
      quantity: quantity,
    };

    medContext.addItem(item);
    console.log(medContext);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="medcine name"
          name="medname"
          id="medname"
        />
        <input type="text" placeholder="description" name="desc" id="desc" />
        <input type="number" placeholder="price" name="price" id="price" />
        <input
          type="text"
          placeholder="quantity available"
          name="quantity"
          id="quantity"
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default AddMedcine;
