import React, { useContext } from "react";
import UserNameContext from "../components/UserNameContext";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Input } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const UserNameInput = () => {
  const { userName, handleNameSubmit } = useContext(UserNameContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNameSubmit(e.target.name.value);

    navigate("/home");
  };

  if (userName) {
    return null;
  }

  return (
    <div className="login">
      <div className="loginHeader">
        <div className="loginText">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <PersonIcon
              sx={{ color: "#3c009d", marginRight: "10px", marginLeft: "10px" }}
            />
            <Input
              color="success"
              name="name"
              placeholder="Enter your name please"
              size="lg"
              variant="solid"
              required
            />
            <Button type="submit" sx={{ color: "#3c009d" }}>
              Submit
            </Button>
          </div>
        </div>

        <div></div>
      </form>
    </div>
  );
};

export default UserNameInput;
