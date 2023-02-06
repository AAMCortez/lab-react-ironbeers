import axios from "axios";
import { useState } from "react";
const newBeer = (beer) => {
   return axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beer);
};

function NewBeer() {
   const [name, setName] = useState("");
   const [tagline, setTagline] = useState("");
   const [description, setDescription] = useState("");
   const [firstBrewed, setFirstBrewed] = useState("");
   const [brewersTips, setBrewersTips] = useState("");
   const [attenuationLevel, setAttenuationLevel] = useState(0);
   const [contributedBy, setContributedBy] = useState("");

   function handleNameChange(event) {
      setName(event.target.value);
   }
   function handleTaglineChange(event) {
      setTagline(event.target.value);
   }
   function handleDescriptionChange(event) {
      setDescription(event.target.value);
   }
   function handleFirstBrewedChange(event) {
      setFirstBrewed(event.target.value);
   }
   function handleBrewersTipsChange(event) {
      setBrewersTips(event.target.value);
   }
   function handleAttenuationLevelChange(event) {
      setAttenuationLevel(event.target.value);
   }
   function handleContributedByChange(event) {
      setContributedBy(event.target.value);
   }
   async function handleSubmitForm(event) {
      event.preventDefault();
      const beer = await newBeer({
         name,
         tagline,
         description,
         firstBrewed,
         brewersTips,
         attenuationLevel,
         contributedBy,
      });

      console.log(beer.data);
   }

   return (
      <form onSubmit={handleSubmitForm}>
         <label htmlFor="name">Name</label>
         <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
         />
         <label htmlFor="tagline">tagline</label>
         <input
            id="tagline"
            type="text"
            value={tagline}
            onChange={handleTaglineChange}
         />
         <label htmlFor="description">Description</label>
         <input
            id="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
         />
         <label htmlFor="firstBrewed">First Brewed</label>
         <input
            id="firstBrewed"
            type="text"
            value={firstBrewed}
            onChange={handleFirstBrewedChange}
         />
         <label htmlFor="brewersTips"></label>
         <input
            id="brewersTips"
            type="text"
            value={brewersTips}
            onChange={handleBrewersTipsChange}
         />
         <label htmlFor="attenuationLevel"></label>
         <input
            id="attenuationLevel"
            type="number"
            value={attenuationLevel}
            onChange={handleAttenuationLevelChange}
         />
         <label htmlFor="contributedBy"></label>
         <input
            id="contributedBy"
            type="text"
            value={contributedBy}
            onChange={handleContributedByChange}
         />
         <button type="submit">Add New</button>
      </form>
   );
}

export default NewBeer;
