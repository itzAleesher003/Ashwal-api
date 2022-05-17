import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

var axios = require("axios");

export default function Cats() {
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

  return (
    <Container maxWidth="sm">
      <img src={url} height="500" />
    </Container>
  );
}
