import { Button, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";

function Note({ title, content, id, delNote }) {
  const [modalOpen, setModalOpen] = useState(false);

  function openHandler() {
    setModalOpen(true);
  }
  function closeHandler() {
    setModalOpen(false);
  }
  function clickHandler() {
    delNote(id);
  }
  return (
    <Paper
      style={{
        minWidth: "200px",
        minHeight: "100px",
        padding: "10px",
        margin: "20px",
        display: "inline-flex",
        backgroundColor:'#F4F6FC'
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={openHandler} style={{ marginLeft: "120px" }}>
        <DeleteIcon style={{ color: "red" }} />
      </Button>
      {modalOpen && (
        <div>
          <p style={{ textAlign: "center" }}>Are you sure?</p>
          <button className="btn btn--alt" onClick={closeHandler}>Cancel</button>
          <button className="btn" onClick={clickHandler}>
            Confirm
          </button>
        </div>
      )}
    </Paper>
  );
}

export default Note;
