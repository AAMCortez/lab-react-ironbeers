import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const getAllBeers = () => {
   return axios.get("https://ih-beers-api2.herokuapp.com/beers");
};
export const getBeer = (id) => {
   return axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
};
function Beers() {
   const [beers, setBeers] = useState([]);
   //    const getAllBeers = () => {
   //       return axios.get("https://ih-beers-api2.herokuapp.com/beers");
   //    };

   useEffect(() => {
      async function handleGetAllBeers() {
         const response = await getAllBeers();
         setBeers(response.data);
         console.log(response.data);
      }
      handleGetAllBeers();
   }, []);

   return (
      <>
         <h3>List of Beers</h3>
         <ul>
            {beers.map((beers) => {
               return (
                  <li key={beers._id}>
                     <Link to={`/beers/${beers._id}`}>
                        <img
                           src={beers.image_url}
                           alt={beers.name}
                           width="150"
                        />
                        <h3>{beers.name}</h3>
                        <p>{beers.tagline}</p>
                        <div>Created by: {beers.contributed_by}</div>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </>
   );
}
export default Beers;
