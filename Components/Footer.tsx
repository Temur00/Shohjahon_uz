import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2A254B] w-">
      <div className="container 2xl:w-full">
        <div className="flex flex-wrap pt-[58px] 2xl:flex justify-between items-start pt-[58px]">
          <div className=" text-white">
            <a href="#" className="text-[16px] block pb-[12px]">
              Menu
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              New arrivals
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Best sellers
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Recently viewed
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Popular this week
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              All products
            </a>
          </div>
          <div className=" text-white">
            <a href="#" className="text-[16px] block pb-[12px]">
              Categories
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Crockery
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Furniture
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Homeware
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Plant pots
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Chairs
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Crockery
            </a>
          </div>
          <div className=" text-white">
            <a href="#" className="text-[16px] block pb-[12px]">
              Our company
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              About us
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Vacancies
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Contact us
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Privacy
            </a>
            <a href="#" className="text-[14px] block pb-[12px]">
              Returns policy
            </a>
          </div>
          <div className=" text-white">
            <a href="#" className="text-[16px] block pb-[12px]">
              Join our mailing list
            </a>
            <div className="hidden 2xl:flex w-[627px]gap-0">
              <input
                type="text"
                placeholder="your@email.com"
                className="input-2"
              />
              <button className="btn-2 ">Sign Up</button>
            </div>
            <div className="w-[342px] flex gap-0 2xl:hidden">
              <input
                type="text"
                placeholder="your@email.com"
                className="input-5"
              />
              <button className="btn-5 ">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="container mt-[10px] 2xl:container h-[1px] bg-[#5a5386]"></div>
        <div className="container flex flex-wrap gap-2 justify-center text-white 2xl:flex justify-between items-center py-[24px]">
          <p className="text-center 2xl:text-[14px]">
            Copyright 2022 Avion LTD
          </p>
          <div className="flex justify-center items-center gap-[24px]">
            <img src="l-1.png" alt="" />
            <img src="l-2.png" alt="" />
            <img src="l-3.png" alt="" />
            <img src="l-4.png" alt="" />
            <img src="l-5.png" alt="" />
            <img src="l-6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
