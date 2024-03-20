import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ButtonComponent from "./ButtonComponent";
import UserNameContext from "../components/UserNameContext";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
  const navigate = useNavigate();
  const { userName, handleNameSubmit } = useContext(UserNameContext);

  if (!userName || userName === "") {
    return null;
  }

  const Logout = () => {
    handleNameSubmit("");
    navigate("/");
  };

  return (
    <div className="buttonsNav">
      <ButtonComponent
        href="/home"
        startIcon={<HomeIcon />}
        buttonText="Home"
      />
      <ButtonComponent
        href="/searchCats"
        startIcon={<PetsIcon />}
        buttonText="Cats"
      />
      <ButtonComponent
        href="/favorites"
        startIcon={<FavoriteIcon sx={{ color: "red" }} />}
        buttonText="Favorites"
      />
      <ButtonComponent
        onClick={() => Logout()}
        startIcon={<LogoutIcon sx={{ color: "black" }} />}
        buttonText="logout"
      />
    </div>
  );
};

export default NavButtons;
