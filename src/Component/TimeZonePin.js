import React from "react";
import Pincode from "./Pincode";
import {useState, useEffect} from "react";
function TimeZonePin({pin, data}) {
  const [allPins, setAllPins] = useState([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    console.log("location useEffect");
    fetch(`https://api.postalpincode.in/pincode/${pin}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("allPins: ", data);
        setAllPins(data);
      });
  }, []);

  function changeText(event) {
    console.log(event.target.value);
    setFilterText(event.target.value);
  }
  // calcTime("Bom", "+5.5");
  function calcTime(offset = "+5.5") {
    let d = new Date();
    let utc = d.getTime() + d.getTimezoneOffset() * 60000;
    let nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString();
  }
  return (
    <div>
      <p className="p">TimeZone: {data.timezone}</p>
      <p className="p">Date and Time: {calcTime("+5.5")} </p>
      <p className="p">Pincode: {pin}</p>
      <p className="p">Message: {allPins[0]?.Message}</p>
      <input
        className="input"
        type="text"
        onChange={changeText}
        placeholder="Filter"
      />
      <Pincode pins={allPins} text={filterText} />
    </div>
  );
}

export default TimeZonePin;
