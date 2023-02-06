import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeer } from "./Beers";

function BeerDetail() {
   const [beerDetail, setBeer] = useState(null);
   const { beerId } = useParams();

   // useEffect(() => {
   //    async function handleGetAllBeers() {
   //       const response = await getAllBeers();
   //       setBeers(response.data);
   //    }
   //    handleGetAllBeers();
   // }, []);
   // async function getBeer(id) {
   //     await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
   // }
   useEffect(() => {
      async function handleBeerDetail() {
         const response = await getBeer(beerId);
         setBeer(response.data);
         console.log(response.data);
      }
      handleBeerDetail();
   }, [beerId]);

   return beerDetail ? (
      <>
         {beerDetail.image_url && (
            <img src={beerDetail.image_url} alt={beerDetail.name} width="150" />
         )}
         <h3>{beerDetail.name}</h3>
         <p>{beerDetail.tagline}</p>
         <div>{beerDetail.first_brewed}</div>
         <div>{beerDetail.attenuation_level}</div>
         <div>{beerDetail.description}</div>
         <div>{beerDetail.contributed_by}</div>
      </>
   ) : (
      <p>Loading...</p>
   );
}

export default BeerDetail;
