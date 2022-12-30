import React from "react";

const Map = ({loc = ""}) => {
  let url = `https://maps.google.com/maps?q=${loc}&z=15&output=embed`;
  return (
    <div style={{marginTop: 10}}>
      <iframe src={url} width="700" height="270" title="Maps"></iframe>
    </div>
  );
};

export default Map;
