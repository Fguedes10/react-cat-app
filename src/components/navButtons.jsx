import React, { useContext } from "react";
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ButtonComponent from './ButtonComponent';
import UserNameContext from '../components/UserNameContext';

const NavButtons = () => {
    const { userName } = useContext(UserNameContext);

    if (!userName || userName === "") {
        return null;
    }

    



    return (
        <div className="buttonsNav">
            <ButtonComponent href="/home" startIcon={<HomeIcon />} buttonText="Home" />
            <ButtonComponent href="/searchCats" startIcon={<PetsIcon />} buttonText="Search Cats" />
            <ButtonComponent href="/favorites" startIcon={<FavoriteIcon sx={{ color: "red" }} />} buttonText="Favorites" />
        </div>
    );
};

export default NavButtons;