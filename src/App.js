import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import SearchCats from "./pages/SearchCats";
import NavButtons from "./components/navButtons";

function App() {


  return(
  <BrowserRouter>
  <header className="App-header">
  <nav className="nav-links">
    <div >
      <img className="logo" src="images/logo.png" alt="a cat" />
    </div>
    <NavButtons/>
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
