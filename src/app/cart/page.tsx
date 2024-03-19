"use client";
import { create } from "zustand";
import React, { useEffect, useState } from "react";
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
const page = () => {
  const { count, plus, minus } = useStore();
  const newCart = JSON.parse(localStorage.getItem("products") || "[]");
  let [a, setA] = useState(newCart);
  useEffect(() => {}, [a]);
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container">
        <p className="text-[24px] pb-[40px] pt-[36px] 2xl:text-[36px] pt-[64px]">
          Your shopping cart
        </p>
        <div className="hidden 2xl:flex justify-between items-center pb-[11px]">
          <p className="">Product</p>
          <p className="">Quantity</p>
          <p className="">Total</p>
        </div>
        <div className="hidden 2xl:block bg-[#EBE8F4] h-[1px] mb-[20px]"></div>
        {a.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-wrap items-center justify-center 2xl:flex justify-between items-center pb-[20px]"
          >
            {/* //////////// */}

            <div className="flex justify-left items-center">
              <img src={product.img} alt="" className="w-[109px] h-[134px]" />
              <div className="w-[200px] px-[21px]">
                <p className="text-[20px]">{product.name}</p>
                <p className="text-[14px] py-[8px]">{product.category}</p>
                <p className="text-[14px]">£{product.price}</p>
              </div>
              <div className="flex justify-start gap-2 items-center 2xl:hidden">
                <button onClick={minus} className="w-[10px]">
                  -
                </button>
                <p className="text-[16px]">{count}</p>
                <button onClick={plus} className="w-[10px]">
                  +
                </button>
              </div>
            </div>

            {/* ///////////////////// */}
            <div className="hidden 2xl:flex w-[50%] justify-between items-center">
              <div className="flex justify-start gap-2 items-center">
                <button onClick={minus} className="w-[10px]">
                  -
                </button>
                <p className="text-[16px]">{count}</p>
                <button onClick={plus} className="w-[10px]">
                  +
                </button>
              </div>
              <p className="hidden 2xl:block text-[18px]">
                £{product.price * count}
              </p>
            </div>
          </div>
        ))}
        <div className="hidden 2xl:block bg-[#EBE8F4] h-[1px]"></div>
        <div className="flex justify-end pt-[30px]">
          <div className=" pb-[48px]">
            <div className="flex gap-[16px] justify-end items-center">
              <p className="text-[#4E4D93] text-[20px]">Subtotal</p>
              <p className="text-[24px]">£{250 * (count + a.length)}</p>
            </div>
            <p className="text-[14px] text-[#4E4D93] pt-[12px] pb-[16px] text-end">
              Taxes and shipping are calculated at checkout
            </p>
            <div className="flex justify-end">
              <button className="hidden 2xl:block px-[32px] mx-end py-[16px]  bg-[#2A254B] text-white transition duration-500 hover:bg-[#4E4D93] ">
                Go to checkout
              </button>
              <button className="w-[342px] px-[32px] mx-auto py-[16px]  bg-[#2A254B] text-white transition duration-500 hover:bg-[#4E4D93] 2xl:hidden">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
