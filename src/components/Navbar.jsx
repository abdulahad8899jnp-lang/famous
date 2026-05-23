import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      px-6 py-2 
      bg-white/10 backdrop-blur-md 
      border border-white/20
      rounded-full 
      text-white 
      flex gap-6 items-center
      shadow-lg">

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
        }
      >
        Contact
      </NavLink>
    </div>
  );
}