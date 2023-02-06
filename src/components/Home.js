import { Link } from "react-router-dom";
import beerImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";
function Home() {
   return (
      <>
         <div>
            <Link to="/beers">All Beers</Link>
            <img src={beerImg} width="500" height="200" alt="beers" />
         </div>
         <div>
            <Link to="/random-beer">Random Beers</Link>
            <img src={newBeerImg} width="500" height="200" alt="beers" />
         </div>
         <div>
            <Link to="/new-beer">New Beer</Link>
            <img src={randomBeerImg} width="500" height="200" alt="beers" />
         </div>
      </>
   );
}

export default Home;
