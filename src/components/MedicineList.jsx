import React, { useContext } from "react";
import MedicineContext from "../store/medicine-context";
import styles from "./MedicineList.module.css";

function MedicineList() {
  const medContext = useContext(MedicineContext);

  const decreaseQuantityHandler = (item) => {
    medContext.removeItem(item);
  };

  const medList = (
    <ul className={styles.medList}>
      {medContext.items.map((item) => (
        <li key={item.id}>
          <div>
            <strong>Name:</strong> {item.med_name} <br />
            <strong>Description:</strong> {item.desc} <br />
            <strong>Price:</strong> {item.price} <br />
            <strong>Quantity:</strong>{" "}
            {item.quantity === 0 ? "Out of Stock" : item.quantity}
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => decreaseQuantityHandler(item)}
              disabled={item.quantity === 0}
              className={item.quantity === 0 ? styles.disabledButton : ""}
            >
              Add To Bill
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      MedicineList
      <div>{medList}</div>
    </>
  );
}

export default MedicineList;
