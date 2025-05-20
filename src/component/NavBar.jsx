import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { LuAlignJustify } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="text-blue-950">
      {/* Top Bar */}
      <div className="bg-gray-300 px-4 md:px-8 flex items-center justify-between h-12 font-bold">
        <NavLink to="/" className="text-lg">
          Myk-spencer Fashion World
        </NavLink>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            placeholder="Search for Products,Brand"
            className="h-8 rounded-md bg-white w-80 border"
          />
          <button className="bg-blue-950 text-white px-4 h-8 rounded-md">
            Search
          </button>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/Account" className="flex items-center space-x-1">
            <VscAccount className="text-2xl" />
            <span>Account</span>
          </NavLink>

          <NavLink to="/Cart" className="flex items-center space-x-1">
            <IoMdCart className="text-2xl" />
            <span>Cart</span>
          </NavLink>

          <NavLink to="/Help" className="flex items-center space-x-1">
            <IoIosHelpCircleOutline className="text-2xl" />
            <span>Help</span>
          </NavLink>
        </div>

        {/* Mobile Hamburger & Search Icon */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <LuAlignJustify className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-gray-100 px-4 py-4 md:hidden space-y-4">
          <input
            placeholder="Search for Products,Brand"
            className="block w-full h-8 rounded-md bg-white border px-2"
          />
          <button className="w-full bg-blue-950 text-white h-8 rounded-md">
            Search
          </button>

          <NavLink to="/Account" className="block py-2 font-medium">
            <div className="flex items-center space-x-2">
              <VscAccount className="text-xl" /> <span>Account</span>
            </div>
          </NavLink>

          <NavLink to="/Cart" className="block py-2 font-medium">
            <div className="flex items-center space-x-2">
              <IoMdCart className="text-xl" /> <span>Cart</span>
            </div>
          </NavLink>

          <NavLink to="/Help" className="block py-2 font-medium">
            <div className="flex items-center space-x-2">
              <IoIosHelpCircleOutline className="text-xl" /> <span>Help</span>
            </div>
          </NavLink>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="bg-blue-950 text-white flex items-center justify-around h-10">
       
        <NavLink to="/" className="py-2 block lg:inline-block font-bold">
          Home
        </NavLink>
        <NavLink to="/Women" className="py-2 block lg:inline-block font-bold">
          Women
        </NavLink>
        <NavLink to="/Men" className="py-2 block lg:inline-block font-bold">
          Men
        </NavLink>
        <NavLink to="/unisex" className="py-2 block lg:inline-block font-bold">
          Unisex
        </NavLink>
        <NavLink to="/Children" className="py-2 block lg:inline-block font-bold">
        Children
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
