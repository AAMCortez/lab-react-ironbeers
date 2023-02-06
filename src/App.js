import { Route, Routes } from "react-router-dom";
import "./App.css";
import BeerDetail from "./components/BeerDetail";
import Beers from "./components/Beers";
import Header from "./components/Header";
import Home from "./components/Home";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/beers" element={<Beers />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="/beers/:beerId" element={<BeerDetail />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
   );
}

export default App;
