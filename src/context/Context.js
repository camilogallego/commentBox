import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        comments,
        setComments
      }}>
      {props.children}
    </Context.Provider>
  );
};