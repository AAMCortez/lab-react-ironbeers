import { NavLink } from "react-router-dom";

function Navbar() {
   return (
      <div>
         <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="/"
         >
            HOME
         </NavLink>
      </div>
   );
}

export default Navbar;
