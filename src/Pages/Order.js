import React from "react";
import Header from "../components/Header";
import Entry from "../components/EntryMedicines";
import medicines from "../components/medicines";

function createEntry(medicineTerm) {
  return (
    <Entry
      key={medicineTerm.id}
      medicine={medicineTerm.medicine}
      name={medicineTerm.name}
      description={medicineTerm.properties}
    />
  );
}


const Order = () =>{
    return(
        <div>
          <Header />
          <h1>
        <span>Order Medicines</span>
      </h1>
      <dl className="dictionary">{medicines.map(createEntry)}</dl>
        </div>
    )
};
export default Order;
