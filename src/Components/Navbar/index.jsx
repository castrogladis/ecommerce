import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid"


function Navbar() {
  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4"

  return(
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full bg-white py-5 px-8 font-light">
      <ul className="flex items-center gap-3">
      <li className="font-bold text-lg">
        <NavLink 
          to="/"
          onClick={() => {context.setSearchByCategory()
            // context.setSearchBytitle("");
          }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all"
         onClick={() => {context.setSearchByCategory()
          // context.setSearchBytitle("");
         }}
         className={({ isActive }) => isActive ? activeStyle : undefined}>
          All
        </NavLink>
      </li>
      <li>
        <NavLink to="/men's-clothing"
        onClick={() => {context.setSearchByCategory("men's clothing")
        // context.setSearchBytitle("");
        } }
        
        className={({ isActive }) => isActive ? activeStyle : undefined}>
        Men
        </NavLink>
      </li>
      <li>
        <NavLink to="/jewelery" 
        onClick={() => {context.setSearchByCategory("jewelery")
        // context.setSearchBytitle("");
        }}
        className={({ isActive }) => isActive ? activeStyle : undefined}>
        Jewelry
        </NavLink>
      </li>
      <li>
        <NavLink to="/electronics" 
        onClick={() => {
          context.setSearchByCategory("electronics")
          // context.setSearchBytitle("");
        }}
        className={({ isActive }) => isActive ? activeStyle : undefined}>
        Electronics
        </NavLink>
      </li>
      <li>
        <NavLink to="/women's-clothing" 
        onClick={() => {context.setSearchByCategory("women's clothing")
        // context.setSearchBytitle("");
        }}
        className={({ isActive }) => isActive ? activeStyle : undefined}>
          Women
        </NavLink>
      </li>
      </ul>

      <ul className="flex items-center gap-3">
      <li className="text-black/60">
        sales@home.com
      </li>
      <li>
        <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle : undefined}>
          My Orders
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle : undefined}>
          My Account
        </NavLink>
      </li>
      <li>
        <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeStyle : undefined}>
          Sign In
        </NavLink>
      </li>
      <li className="flex justify-center">
      <ShoppingBagIcon className="w-6 h-6"></ShoppingBagIcon> 
      <div>{context.count}</div>
      </li>
     
      </ul>
    </nav>
  ) 
}

export default Navbar;