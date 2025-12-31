import Box from "./Box";
import React from "react";
import { useState } from "react";

function Card({ title, prio, data = {} }) {
  const cardData = data;
  console.log(cardData);

  function getPrioStyle(prio) {
    if (prio === "High") {
      return { color: "red" };
    } else if (prio === "Medium") {
      return { color: "orange" };
    } else {
      return { color: "green" };
    }
  }

  const prioStyle = getPrioStyle(prio);
  const authorStyle = {
    fontStyle: "italic",
    color: "lightgray",
    fontWeight: "lighter",
  };

  return (
    <Box borderStyle="none">
      <h3>{title}</h3>

      <br></br>

      <p>
        Priority: <span style={prioStyle}>{prio}</span>{" "}
      </p>
      <p>
        Author: <span style={authorStyle}>{data.author}</span>
      </p>
    </Box>
  );
}

export default Card;
