import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {
   const [randomBeer, setRandomBeer] = useState([]);
   const getRandomBeer = () => {
      return axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
   };
   useEffect(() => {
      async function handleGetRandomBeer() {
         const response = await getRandomBeer();
         setRandomBeer(response.data);
         console.log(response.data);
      }
      handleGetRandomBeer();
   }, []);

   return randomBeer ? (
      <>
         {randomBeer.image_url && (
            <img src={randomBeer.image_url} alt={randomBeer.name} width="150" />
         )}
         <h3>{randomBeer.name}</h3>
         <p>{randomBeer.tagline}</p>
         <div>{randomBeer.first_brewed}</div>
         <div>{randomBeer.attenuation_level}</div>
         <div>{randomBeer.description}</div>
         <div>{randomBeer.contributed_by}</div>
      </>
   ) : (
      <p>Loading...</p>
   );
}

export default RandomBeer;
