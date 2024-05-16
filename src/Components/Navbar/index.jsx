import { NavLink } from "react-router-dom"

function Navbar() {
  const activeStyle = "underline underline-offset-4"

  return(
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-light">
      <ul className="flex items-center gap-3">
      <li className="font-bold text-lg">
        <NavLink 
          to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all" className={({ isActive }) => isActive ? activeStyle : undefined}>
          All
        </NavLink>
      </li>
      <li>
        <NavLink to="/padded" className={({ isActive }) => isActive ? activeStyle : undefined}>
          Padded
        </NavLink>
      </li>
      <li>
        <NavLink to="/curtains" className={({ isActive }) => isActive ? activeStyle : undefined}>
          Curtains
        </NavLink>
      </li>
      <li>
        <NavLink to="/bedsheets" className={({ isActive }) => isActive ? activeStyle : undefined}>
          Bed Sheets
        </NavLink>
      </li>
      <li>
        <NavLink to="/decor" className={({ isActive }) => isActive ? activeStyle : undefined}>
          Decor
        </NavLink>
      </li>
      <li>
        <NavLink to="/others" className={({ isActive }) => isActive ? activeStyle : undefined}>
          Others
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
      <li>
        🛒 0
      </li>
      </ul>
    </nav>
  ) 

}

export default Navbar;