import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SearchCats from "./pages/SearchCats";
import CatPage from "./pages/SearchCats/catpage.js";
import Favorites from "./pages/favorites";
import NavButtons from "./components/navButtons";
import UserNameInput from "./components/UserNameInput.jsx";
import UserNameContext from "./components/UserNameContext.jsx";

function App() {
  const [userName, setUserName] = useState();

  const handleNameSubmit = (name) => {
    setUserName(name);
  };

  return (
    <UserNameContext.Provider value={{ userName, handleNameSubmit }}>
      <BrowserRouter>
        <header className="App-header">
          <nav className="nav-links">
            <div>
              <img className="logo" src="images/logo.png" alt="a cat" />
            </div>
            <div className="headline">Cats around the world!</div>
            <NavButtons />
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<UserNameInput />} />
          <Route path="/home" element={<Home />} />
          <Route path="/searchCats" element={<SearchCats />} />
          <Route path="/catpage/:breedName" element={<CatPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </UserNameContext.Provider>
  );
}

export default App;
