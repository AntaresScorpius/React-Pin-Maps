import React from "react";

function Pincode({pins, text}) {
  console.log("piinnnnn", pins[0]?.PostOffice);
  return (
    <div className="pin-flex-container">
      {/* <input className="input" type="text"></input> */}
      {pins[0]?.PostOffice?.filter((list) =>
        list.Name.toLowerCase().includes(text.toLowerCase())
      ).map((item) => (
        <article key={item.Name} className="pin-item">
          <p>Name: {item.Name}</p>
          <p>Branch Type: {item.BranchType} </p>
          <p>Dilevery Status: {item.DeliveryStatus}</p>
          <p>District: {item.District}</p>
          <p>Division: {item.Division}</p>
        </article>
      ))}
    </div>
  );
}

export default Pincode;
