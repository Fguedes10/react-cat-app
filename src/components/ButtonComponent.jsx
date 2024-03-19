import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonComponent = ({ href, startIcon, buttonText }) => {
  const navigate = useNavigate();

  return (
    <Button
      sx={{
        backgroundColor: "white",
        color: "black",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#94855a",
        },
      }}
      variant="contained"
      startIcon={startIcon}
      onClick={() => navigate(href)}
    >
      {buttonText}
    </Button>
  );
};
export default ButtonComponent;
