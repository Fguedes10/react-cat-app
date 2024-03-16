import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ButtonComponent from './ButtonComponent';


const NavButtons = () => {
    return (
        <div className="buttonsNav">
            <ButtonComponent  href="/home" startIcon={<HomeIcon />} buttonText="Home" />
            <ButtonComponent  href="/searchCats" startIcon={<PetsIcon/>}buttonText="Search Cats" />
            <ButtonComponent  href="/searchCats" startIcon={<FavoriteIcon sx={{color:"red"}}/>} buttonText="Favorites" />
        </div>
    );
};
export default NavButtons