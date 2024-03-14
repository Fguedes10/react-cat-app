import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/home";
import SearchCats from "./pages/SearchCats";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {


  return(
  <BrowserRouter>
  <header className="App-header">
  <nav className="nav-links">
    <div >
      <img className="logo" src="images/logo.png" alt="a cat image" />
    </div>
    <div>
      <div className="buttonsNav">
      <Button sx={{backgroundColor:"white", color:"black" }} href="/home" variant="contained" startIcon={<HomeIcon/>}>Home</Button>
      <Button href="/searchCats" variant="contained" startIcon={<PetsIcon/>}>Search Cats</Button>
      <Button href="/searchCats" variant="contained" startIcon={<FavoriteIcon/>}>Favorites</Button>
      </div>
    </div>
  </nav>
</header>
<Routes>
  <Route path="/home"  element={<Home />} />
  <Route path="/searchCats"  element={<SearchCats />} />
</Routes>
</BrowserRouter>
);
}

export default App;
