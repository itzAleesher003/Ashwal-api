import React, { useState } from "react";
import Container from "@mui/material/Container";

var axios = require("axios");

export default function Profile() {
  const [url, setUrl] = useState("");

  axios({
    method: "get",
    url: "http://makeup-api.herokuapp.com/api/v1/products/1048.json",
    headers: {}
  })
    .then(function (response) {
      var data = response.data;
      setUrl(data.image_link);
      console.log(data.image_link);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <Container maxWidth="sm">
      <div>
        <img src={url} width="300" />

        <img src={url} width="300" />
      </div>
    </Container>
  );
}
