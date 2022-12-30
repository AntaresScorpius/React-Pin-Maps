import React from "react";
import {useState, useEffect} from "react";
import Location from "./Location";
import Map from "./Map";
import TimeZonePin from "./TimeZonePin";

function IP() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState(null);
  // const containerRef = useRef(null);
  useEffect(() => {
    console.log("started -- fetch");
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((res) => {
        setIp(res.ip);
        console.log("ipppp: ", res.ip);
        return res.ip;
      });
  }, []);

  function getData(event) {
    console.log("button clicked");
    event.target.style.display = "none";
    // containerRef.current.style.display = "visible";
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((res) => {
        setIp(res.ip);
        console.log("ipppp: ", res.ip);
        return res.ip;
      })
      .then(() => {
        console.log("2nd fetch");
        fetch(`https://ipinfo.io/${ip}?token=9ba86d7cf6c27d`)
          .then((res) => res.json())
          .then((res) => setData(res));
        console.log("ip is: ", +ip);
        return;
      });
  }

  return (
    <div style={{marginLeft: 20}}>
      <h2>My Public IP Address: {ip} </h2>
      <button className="btn" onClick={getData}>
        Get Data
      </button>
      {data ? <Location data={data} ip={ip} /> : null}
      {data ? <Map loc={data.loc} /> : null}
      {data ? <TimeZonePin pin={data.postal} data={data} /> : null}
      {/* <div ref={containerRef} className="container2">
        <Location data={data} ip={ip} />
        <Map loc={data.loc} />
        <TimeZonePin pin={data.postal} />
      </div> */}
    </div>
  );
}

export default IP;
