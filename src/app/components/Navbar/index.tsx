"use client";
import { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

export const navItems = ["About", "Projects", "Contact"];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => setNavbarOpen((state) => !state);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden md:w-auto" id="navbar">
          {!navbarOpen ? (
            <button
              onClick={toggleMenu}
              className="flex items-center p-3 border rounded border--slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3BottomRightIcon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="flex items-center p-3 border rounded border--slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink name={item} path={`#${item.toLowerCase()}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navItems} />}
    </nav>
  );
};

export default Navbar;
