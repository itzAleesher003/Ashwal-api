import React, { useState } from "react";

import Container from "@mui/material/Container";
var axios = require("axios");

export default function Profile() {
  const [url, setUrl] = useState("");

  axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/images/search",
    headers: {}
  })
    .then(function (response) {
      var data = response.data;
      setUrl(data[0].url);
      console.log(data[0].url);
    })
    .catch(function (error) {
      console.log(error);
    });

  // setUrl("https://mannir.net/images/ibrahim.jpg");
  return (
    <Container maxWidth="sm">
      <div>
        <img src={url} width="300" />

        <img src={url} width="300" />
      </div>
    </Container>
  );
}
