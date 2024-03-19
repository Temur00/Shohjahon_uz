"use client";
import Cart from "@/components/Cart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { create } from "zustand";

interface userType {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  category: string;
}
//

type Store = {
  count: number;
  plus: () => void;
  minus: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  plus: () => set((state) => ({ count: state.count + 1 })),
  minus: () =>
    set((state) =>
      state.count > 1 ? { count: state.count - 1 } : { count: 1 }
    ),
}));
//
const page = ({ params }: any) => {
  const { productId } = params;
  const id = productId;
  const [Product1, setProduct1] = useState<userType[]>([]);
  const { count, plus, minus } = useStore();
  const [product, setProducts] = useState<userType[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    ) as userType[];
    setProducts(storedProducts);
  }, []);

  const shop = (id: any) => {
    const newProduct: userType | undefined = product.find((p) => p.id === id);
    if (newProduct) {
      // Mahsulot topildi
      const newCart = JSON.parse(localStorage.getItem("products") || "[]");
      newCart.push(newProduct);
      localStorage.setItem("products", JSON.stringify(newCart));
    }
    window.alert("Mahsulot muvafiqyatli qo'shildi!!!");
  };

  useEffect(() => {
    axios
      .get(`https://65f4af82f54db27bc0223815.mockapi.io/api/products/${id}`)
      .then((response) => {
        setProduct1(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <div className="w-auto flex flex-wrap  2xl:w-[1440px] mx-auto flex items-center justfy-center gap-0">
        <img
          src={Product1.img}
          alt=""
          className="hidden 2xl:block mx-auto w-[721px] h-[759px]"
        />
        <img
          src={Product1.img}
          alt=""
          className="block mx-auto w-full 2xl:hidden"
        />
        <div className="container 2xl:w-[602px] mx-auto ">
          <p className="pt-[28px] text-[24px] 2xl:text-[36px]">
            {Product1.name}
          </p>
          <p className="pb-[28px] text-[20px] 2xl:text-[24px] pt-[12px] pb-[54px]">
            {Product1.price}
          </p>
          <p className="text-[16px] pb-[16px]">Description</p>
          <p className="twxt-[14px] 2xl:text-[16px] pb-[20px]">
            {Product1.description}
          </p>
          <ul>
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
                <button onClick={minus} className="w-[40px] h-[46px]">
                  -
                </button>
                <p className="">{count}</p>
                <button onClick={plus} className="w-[40px] h-[46px]">
                  +
                </button>
              </div>
              <div className="hidden 2xl:flex items-center justify-between bg-[#F9F9F9] w-[122px] h-[46px]">
                <button onClick={minus} className="w-[40px] h-[46px]">
                  -
                </button>
                <p className="">{count}</p>
                <button onClick={plus} className="w-[40px] h-[46px]">
                  +
                </button>
              </div>
            </div>

            <button
              onClick={shop}
              className="w-[342px] bg-[#2A254B] px-[20px] py-[16px] text-white transition duration-500 hover:bg-[#4E4D93]  2xl:w-[143px] h-[56px] bg-[#2A254B]   py-[16px] text-white"
            >
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
        {/* <div className="flex flex-wrap items-center  2xl:p-0 flex justify-between items-center">
          <div className="w-[163px] pb-[20px] 2xl:w-[305px]">
            <img src="t-1.png" alt="" />
            <p className="text-[20px] pt-[24px] pb-[8px]">The Dandy chair</p>
            <p className="text-[18px]">£250</p>
          </div>
          <div className="w-[163px] pb-[20px] 2xl:w-[305px]">
            <img src="t-2.png" alt="" />
            <p className="text-[20px] pt-[24px] pb-[8px]">The Dandy chair</p>
            <p className="text-[18px]">£250</p>
          </div>
          <div className="w-[163px] pb-[20px] 2xl:w-[305px]">
            <img src="t-3.png" alt="" />
            <p className="text-[20px] pt-[24px] pb-[8px]">The Dandy chair</p>
            <p className="text-[18px]">£250</p>
          </div>
          <div className="w-[163px] pb-[20px] 2xl:w-[305px]">
            <img src="t-4.png" alt="" />
            <p className="text-[20px] pt-[24px] pb-[8px]">The Dandy chair</p>
            <p className="text-[18px]">£250</p>
          </div>
        </div> */}
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
