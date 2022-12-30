import React from "react";

function Location({data, ip}) {
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
