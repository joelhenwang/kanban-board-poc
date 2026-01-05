import "./Card.css";

import Box from "./Box";
import React from "react";
import { useState } from "react";

function Card({ title, prio, data = {} }) {
  const cardData = data;
  console.log(cardData);

  function getPrioStyle(prio) {
    if (prio === "High") {
      return { color: "#FF6961" };
    } else if (prio === "Medium") {
      return { color: "#FEC89A" };
    } else {
      return { color: "#77DD77" };
    }
  }

  const prioStyle = getPrioStyle(prio);
  const authorStyle = {
    fontStyle: "italic",
    color: "lightgray",
    fontWeight: "lighter",
  };

  return (
    <div className="card-container">
      <Box backgroundColor="#181818" borderStyle="none" paddingLeft="16px">
        <Box height="3px" padding="0" backgroundColor={prioStyle.color}></Box>
        <h3
          style={{ color: "white", fontWeight: "lighter", fontSize: "1.05rem" }}
        >
          {title}
        </h3>

        <br></br>

        <p
          style={{ color: "white", fontWeight: "lighter", fontSize: "0.9rem" }}
        >
          Priority: <span style={prioStyle}>{prio}</span>{" "}
        </p>
        <p
          style={{ color: "white", fontWeight: "lighter", fontSize: "0.9rem" }}
        >
          Author: <span style={authorStyle}>{data.author}</span>
        </p>
      </Box>
    </div>
  );
}

export default Card;
