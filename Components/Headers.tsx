"use client";
import { Sling as Hamburger } from "hamburger-react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

import { useState, useEffect } from "react";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const newCart = JSON.parse(localStorage.getItem("products") || "[]");
  let [a, setA] = useState(newCart);
  useEffect(() => {
    setA;
  }, [a]);
  return (
    <div>
      <div className="px-[5px] py-[25px]">
        <Navbar fluid rounded>
          {/* <div className="">...............</div> */}
          <div className="hidden 2xl:flex gap-3">
            <img src="search.svg" alt="" />
            <input
              type="text"
              placeholder="Searching..."
              className="input-3 outline-none"
              // onChange={(e) => setSearchParams(e.target.value)}
            />
          </div>
          <NavbarBrand href="#">
            <Link href="/" className="text-[24px] mr-[-30px]">
              Avion
            </Link>
          </NavbarBrand>
          <div className="flex items-center gap-5 md:order-2">
            <div className="hidden 2xl:flex justify-end gap-5">
              <Link href="/about">About</Link>
              <Link href="/products">All products</Link>
              <Link href="/detels">Detels</Link>
            </div>

            <div className="flex justify-end gap-3">
              <input
                type="text"
                placeholder="Searching..."
                className="w-[100px] outline-none mr-[-6px] 2xl:hidden"
              />
              <img
                src="search.svg"
                alt=""
                className="inline-block 2xl:hidden"
              />
              <Link href="/cart">
                <div className="absolute bg-red-600 ml-[15px] rounded-full px-[4px] text-[14px] mt-[-8px] text-white">
                  {a.length}
                </div>
                <img src="cart.svg" alt="" />
              </Link>
              <Link href="https://sage-druid-f08a36.netlify.app/">
                <img
                  src="user.svg"
                  alt=""
                  className="hidden 2xl:inline-block"
                />
              </Link>
            </div>
            <button
              onClick={handleClick}
              className=" flex-col justify-center items-center block md:hidden w-[28px] h-[28px] cursor-pointer  text-[#22202E] hover:text-slate-950"
            >
              <span className="">
                <Hamburger size={28} />
              </span>
            </button>
            {/* <NavbarToggle className="inline-block 2xl:hidden" /> */}
          </div>
          <div
            className={`${
              isOpen
                ? "translate-x"
                : "-translate-x-[420px] transation duration-400 ease-linier  "
            } absolute top-0 left-0 h-screen w-[70vw] bg-slate-900  z-50 transation duration-500 ease-linear md:hidden shadow-md`}
          >
            <div className="flex flex-col text-center pt-[30px] gap-3 text-white ">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/products">All product</Link>
              <Link href="https://sage-druid-f08a36.netlify.app/">Login</Link>
            </div>
          </div>


          {/* <NavbarCollapse className="text-[18px] 2xl:hidden">
            <NavbarLink href="/" active>
              Home
            </NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/products">All products</NavbarLink>
            <NavbarLink href="/detels">Detels</NavbarLink>
          </NavbarCollapse> */}
        </Navbar>
      </div>
      <div className="block 2xl:w-[1386px] mx-auto h-[1px] bg-zinc-300 px-2"></div>
      <div className="hidden 2xl:flex container z-10 justify-center items-center gap-[44px] py-[20px] text-[16px] text-slate-400">
        <a href="#" className=" no-underline">
          Plant pots
        </a>
        <a href="#" className=" no-underline">
          Ceramics
        </a>
        <a href="#" className=" no-underline">
          Tables
        </a>
        <a href="#" className=" no-underline">
          Chairs
        </a>
        <a href="#" className=" no-underline">
          Crockery
        </a>
        <a href="#" className=" no-underline">
          Tableware
        </a>
        <a href="#" className=" no-underline">
          Cutlery
        </a>
      </div>
    </div>
  );
};

export default Headers;
