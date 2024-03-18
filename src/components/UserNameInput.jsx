import React, { useState, useContext } from "react";
import  UserNameContext  from "../components/UserNameContext"; 
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const UserNameInput = () => {
  const { userName, handleNameSubmit } = useContext(UserNameContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNameSubmit(e.target.name.value);


    navigate("/home")
    };

  if (userName) {
    return null; 
  }

  return (
    <div className="login">
      <form onSubmit={ handleSubmit}>
        <label>Please enter your name to proceed:</label>
        <input
          type="text"
          name="name"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UserNameInput;
