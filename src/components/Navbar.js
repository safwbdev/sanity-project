import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            to="/"
          >
            MiCasa
          </NavLink>
          <NavLink
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
            to="/post"
          >
            Blog Posts
          </NavLink>
          <NavLink
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
            to="/about"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
