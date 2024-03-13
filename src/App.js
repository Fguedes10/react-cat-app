import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/home/index.js";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';

function App() {


  return(
  <BrowserRouter>
  <header>
  <NavLink>
      
      <Button href="/home" variant="contained" startIcon={<HomeIcon/>}>Home</Button>
      <Button href="/home" variant="contained" startIcon={<PetsIcon/>}>Search Cats</Button>
    
  </NavLink>
</header>
<Routes>
  <Route path="/home"  element={<Home />} />
</Routes>
</BrowserRouter>
);
}

export default App;
