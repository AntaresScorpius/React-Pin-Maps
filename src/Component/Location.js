import React from "react";

function Location({data, ip}) {
  // const temp = {
  //   ip: "103.141.87.219",
  //   city: "Jalgaon",
  //   region: "Maharashtra",
  //   country: "IN",
  //   loc: "20.7899,75.7558",
  //   org: "AS133311 Maxtech Broadband Pvt Ltd",
  //   postal: "425203",
  //   timezone: "Asia/Kolkata",
  //   readme: "https://ipinfo.io/missingauth",
  // };
  console.log("data saved");
  console.log(data);

  return (
    <div className="location-flex">
      <article className="location-item">Lat : {data?.loc}</article>
      <article className="location-item">City : {data?.city}</article>
      <article className="location-item">Organisation : {data?.org}</article>
      <article className="location-item">Long : {data?.loc}</article>
      <article className="location-item">Region : {data?.region}</article>
      <article className="location-item">Hostname : {data?.ip}</article>
    </div>
  );
}

export default Location;
