import React, { useState } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Dropdown, Input, Button, Table } from "../components";
import useInitialState from "../hook/useInitialState";
import { del } from "../api";



export default function Comments() {
  useInitialState();
  
  const [comment, setComment] = useState({
    user: "",
    message: ""
  })

  const handleSubmit = (data) => {

  }

  const handleDelete = async (id) => {
    try {
      const response = del(`/comment/${id}`);
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='x' >
     <h1> ¡Animate a dejar tus comentarios!</h1>
      <div className='container'>
        <Paper style={{ backgroundColor: "#E5EDF2" }} elevation={0}>
          <div className="containerPaper">
            <form onSubmit={handleSubmit}>
              <div className='containerSelec'>
                <Dropdown
                  value={comment.user}
                  handleChange={(value) => setComment({ user: value })} />
              </div>
              <div className="buttonComent">
                <Input value={comment.message} handleChange={(value) => setComment({ message: value })} />
                <Button />
              </div>
            </form>
            <div className="containerTable">
              <Table handleDelete={handleDelete} />
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
