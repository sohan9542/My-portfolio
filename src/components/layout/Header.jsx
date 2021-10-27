import {
  faBriefcase,
  faComments,
  faEnvelopeOpen,
  faHome,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./headers.css";
const Header = () => {
  return (
    <div className="relative ">
      <div className="fixed z-50 h-full hidden lg:flex flex-col gap-y-8 items-start " style={{top:'40%', right:'3%'}}>
        <div className="icon home">
          <div className="bg-sc w-36 tooltip p-3 text-lg rounded-full">
            Home
          </div>

          <NavLink
            to="/"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full "
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </div>
        <div className="icon about">
          <div className="bg-sc w-36 tooltip p-3 text-lg rounded-full">
            About
          </div>

          <NavLink
            to="/about"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </div>
        <div className="icon portfolio">
          <div className="bg-sc w-36 tooltip p-3 text-lg rounded-full">
            Portfolio
          </div>
          <NavLink
            to="/portfolio"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faBriefcase} />
          </NavLink>
        </div>
        <div className="icon contact">
          <div className="bg-sc w-36 tooltip p-3 text-lg rounded-full">
            Contact
          </div>
          <NavLink
            to="/contact"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </NavLink>
        </div>
        <div className="icon blog">
          <div className="bg-sc w-36 tooltip p-3 text-lg rounded-full">
            Blog
          </div>
          <NavLink
            to="/blog"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faComments} />
          </NavLink>
        </div>
      </div>
      <div className=" fixed z-50 grid grid-cols-5 lg:hidden items-center w-full bottom-0 p-3 bg-tr left-0">
        <div className="flex items-center justify-center">
          {" "}
          <NavLink
            to="/"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </div>
        <div className="flex items-center justify-center"> {" "}
          <NavLink
            to="/about"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faUser} />
          </NavLink></div>
        <div className="flex items-center justify-center">
        {" "}
          <NavLink
            to="/portfolio"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faBriefcase} />
          </NavLink>
        </div>
        <div className="flex items-center justify-center">
        {" "}
          <NavLink
            to="/contact"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </NavLink>
        </div>
        <div className="flex items-center justify-center">
        {" "}
          <NavLink
            to="/blog"
            exact
            className="text-white activeme px-4 py-3 text-lg rounded-full hover:text-white"
            activeClassName="bg-sc"
          >
            {" "}
            <FontAwesomeIcon icon={faComments} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
