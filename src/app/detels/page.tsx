import Cart from "@/components/Cart";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-auto flex flex-wrap  2xl:w-[1440px] mx-auto flex items-center justfy-center gap-0">
        <img src="product.png" alt="" className="mx-auto" />
        <div className="container 2xl:w-[602px] mx-auto ">
          <p className="pt-[28px] text-[24px] 2xl:text-[36px]">
            The Dandy Chair
          </p>
          <p className="pb-[28px] text-[20px] 2xl:text-[24px] pt-[12px] pb-[54px]">
            £250
          </p>
          <p className="text-[16px] pb-[16px]">Description</p>
          <p className="twxt-[14px] 2xl:text-[16px] pb-[20px]">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          <ul type="circle">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
          <div className="pl-0">
            <p className="pt-[28px] 2xl:pt-[50px] pb-[28px] text-[16px]">
              Dimensions
            </p>
            <div className="flex justify-between 2xl:flex items-center justify-left gap-[55px]">
              <p className="">Height</p>
              <p className="">Width</p>
              <p className="">Depth</p>
            </div>
            <div className="flex justify-between 2xl:flex items-center justify-left pt-[12px] gap-[55px]">
              <p className="">110cm</p>
              <p className="">75cm</p>
              <p className="">50cm</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-[5px] 2xl:flex justify-between pl-[0px] items-center gap-[30px] pt-[20px]">
            <div className="mx-auto  2xl:flex items-center justify-between  py-[27px] gap-5">
              <p className="text-center 2xl:pl-[22px]  pb-[1px]">Amount:</p>
              <div className=" w-[332px] mt-[20px]  flex items-center justify-between bg-[#F9F9F9] 2xl:hidden">
                <button className="w-[40px] h-[46px]">-</button>
                <p className="">1</p>
                <button className="w-[40px] h-[46px]">+</button>
              </div>
              <div className="hidden 2xl:flex items-center justify-between bg-[#F9F9F9] w-[122px] h-[46px]">
                <button className="w-[40px] h-[46px]">-</button>
                <p className="">1</p>
                <button className="w-[40px] h-[46px]">+</button>
              </div>
            </div>

            <button className="w-[342px] bg-[#2A254B] px-[20px] py-[16px] text-white transition duration-500 hover:bg-[#4E4D93]  2xl:w-[143px] h-[56px] bg-[#2A254B]   py-[16px] text-white">
              Add to cart
            </button>
            {/* <button className="w-[342px] bg-[#2A254B] px-[32px] py-[16px] text-white  2xl:ц-х143зчъ bg-[#2A254B] px-[32px] py-[16px] text-white">
              Add to cart
            </button> */}
          </div>
        </div>
      </div>
      {/* /////////////////// */}
      <div className="container pt-[80px] 2xl:container pt-[160px] px-0">
        <p className="text-[20px] text-left 2xl:text-[32px] pb-[33px]">
          You might also like
        </p>
        <Cart />
        <div
          className="p-0 
        flex justify-center"
        >
          <button className="w-[342px] 2xl:w-[170px]  py-[16px] mt-[35px]  bg-slate-100">
            View collection
          </button>
        </div>
      </div>
      {/* ///////////////////// */}
      <p className="container w-[274px] text-left pl-0 pt-[38px] pb-[26px] text-[20px] 2xl:container text-[24px] text-center pt-[130px]  text-slate-800 pb-[51px]">
        What makes our brand different
      </p>
      <div className="container flex flex-wrap p-0 2xl:container flex justify-between items-center px-0 pb-[80px]">
        <div className="pt-[20px] 2xl: w-[270px] ">
          <img src="1.png" alt="" />
          <p className=" 2xl: text-[20px] pt-[16px] pb-[8px]">
            Next day as standard
          </p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="pt-[20px] 2xl: w-[270px]">
          <img src="2.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="pt-[20px] 2xl: w-[270px]">
          <img src="3.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="pt-[20px] 2xl: w-[270px]">
          <img src="4.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
      </div>
      {/* ///// */}
      <div className="hidden 2xl:block bg-slate-100 px-[74px] py-[52px]">
        <div className="container 2xl:container bg-white">
          <p className="text-[20px] text-left 2xl:text-center pt-[68px] pb-[16px] text-[36px]">
            Join the club and get the benefits
          </p>
          <p className="text-[14px] w-auto text-left 2xl:mx-auto text-[16px] w-[470px] text-center">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div
            className="hidden 2xl:flex 
          mx-auto justify-center gap-0 items-center w-[470px] pt-[72px] pb-[54px]"
          >
            <input
              type="text"
              placeholder="your@email.com"
              className="input-1"
            />
            <button className="btn-1 ">Sign Up</button>
            <div
              className="container flex  px-0
        justify-left gap-0 items-center w-[342px] pt-[72px] pb-[54px] 2xl:hidden"
            >
              <input
                type="text"
                placeholder="your@email.com"
                className="input-4"
              />
              <button className="btn-4 ">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
