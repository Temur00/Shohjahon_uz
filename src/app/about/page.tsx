import React from "react";

const page = () => {
  return (
    <div>
      <p className="container text-[32px] text-start 2xl:text-[32px] w-[704px] pt-[67px] pb-[79px] text-center">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </p>
      <div className="block w-[350px] min-w-full mx-auto 2xl:flex w-[1440px] mx-auto justify-center items-center ">
        <div className="container 2xl:w-[536px]">
          <p className="text-[20px] pl-[0px] 2xl:text-[24px]   pb-[25px] w-[536px] max-w-full">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="text-[14px] pl-[0px] pb-[12px] 2xl:text-[16px] ]  pb-[24px] w-[536px] max-w-full">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-[14px] pl-[0px] pb-[64px] 2xl:text-[16px]  pb-[126px] w-[536px] max-w-full">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>

          <button className="w-[342px] ml-[0px] 2xl:w-[170px]  py-[16px] mt-[35px]    bg-slate-100">
            Get in touch
          </button>
        </div>
        <img
          src="m.png"
          alt=""
          className="mr-0 pt-[20px] w-[390px]  2xl:p-0 w-[720px] "
        />
      </div>
      {/* ///////////////// */}
      <div className="block w-[350px] min-w-full mx-auto 2xl:flex w-[1440px] mx-auto justify-center items-center ">
        <img
          src="m-2.png"
          alt=""
          className="mr-0 pt-[20px] w-[390px]  2xl:p-0 w-[720px] "
        />
        <div className="container 2xl:w-[536px]">
          <p className="text-[20px] pt-5 pl-[0px] 2xl:text-[24px]   pb-[25px] w-[536px] max-w-full">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="text-[14px] pl-[0px] pb-[12px] 2xl:text-[16px] ]  pb-[24px] w-[536px] max-w-full">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-[14px] pl-[0px] pb-[64px] 2xl:text-[16px]  pb-[126px] w-[536px] max-w-full">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>

          <button className="w-[342px] ml-[0px] 2xl:w-[170px]  py-[16px] mt-[35px]    bg-slate-100">
            Get in touch
          </button>
        </div>
      </div>
      {/* ///////////// */}
      <p className="container w-[274px] text-left pl-0 pt-[48px] pb-[36px] text-[20px] 2xl:container text-[24px] text-center pt-[120px]  text-slate-800 pb-[51px]">
        What makes our brand different
      </p>
      <div className="container flex flex-wrap p-0 2xl:container flex justify-between items-center px-0 pb-[86px]">
        <div className="2xl: w-[270px] ">
          <img src="1.png" alt="" />
          <p className=" 2xl: text-[20px] pt-[16px] pb-[8px]">
            Next day as standard
          </p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="w-[270px]">
          <img src="2.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="w-[270px]">
          <img src="3.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="w-[270px]">
          <img src="4.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
      </div>
      {/* ///////////////////// */}
      <div className="bg-bg-image w-auto pt-[30px] 2xl:bg-bg-image w-[1440px] pt-[240px] h-[444px] mx-auto">
        <div
          className="hidden 2xl:flex 
          mx-auto justify-center gap-0 items-center mt-[200px] w-[470px] pt-[72px] pb-[54px]"
        >
          <input type="text" placeholder="your@email.com" className="input-1" />
          <button className="btn-1 ">Sign Up</button>
        </div>
        <div className="container text-left text-white 2xl:hidden">
          <p className="text-[24px] pb-[12px]">
            Join the club and get the benefits
          </p>
          <p className="pb-[20px]">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div className="flex items-center gap-2 pb-[8px]">
            <img src="vector.png" alt="" />
            <p className="">Exclusive offers</p>
          </div>
          <div className="flex items-center gap-2 pb-[8px]">
            <img src="vector.png" alt="" />
            <p className="">Free events</p>
          </div>
          <div className="flex items-center gap-2 pb-[8px]">
            <img src="vector.png" alt="" />
            <p className="">Large discounts</p>
          </div>
        </div>
        <div
          className="flex 
          mx-auto justify-center gap-0 items-center w-[324px] pt-[52px] pb-[54px] 2xl:hidden"
        >
          <input type="text" placeholder="your@email.com" className="input-6" />
          <button className="btn-6 ">Sign Up</button>
        </div>
      </div>

      {/* /////////////////////// */}
    </div>
  );
};

export default page;
