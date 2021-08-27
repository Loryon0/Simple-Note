import React from "react";
import Paper from "@material-ui/core/Paper";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex", backgroundColor:'#7985A5' }} square elevation={3}>
      <img
        src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579"
        alt=""
        width="50px"
      ></img>
      <h1 style={{ margin: "0", fontFamily: "cursive", fontWeight: "100" }}>
        React App - Simple Note
      </h1>
    </Paper>
  );
}

export default Header;
