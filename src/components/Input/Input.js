import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Input.css";

export default function Input() {
  return (
    <form noValidate autoComplete="off">
      <p>Comentario</p>
      <TextField
        className="inputComment"
        id="outlined-basic"
        placeholder="La aplicacion me parecio..."
        variant="outlined"
      />
    </form>
  );
}
