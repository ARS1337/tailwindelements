import React from "react";
let state = {
  email: "",
  password: "",
};

const MyContext = React.createContext(state);

const MyReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      console.log(action);
      return {  email: action.payload };
    default:
      throw new Error();
  }
};

export { MyContext, state, MyReducer };
