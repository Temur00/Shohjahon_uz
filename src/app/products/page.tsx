"use client";
import Cart2 from "@/components/Cart2";
import { Checkbox, Label } from "flowbite-react";
import axios from "axios";
import { Key } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useBearStore } from "@/data/zustand";
import { persist } from "zustand/middleware";

interface userType {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  category: string;
}
const page = () => {
  const [product, setProducts] = useState<userType[]>([]);
  const [Search, setSearch] = useState<string>("");
  const [Check, setCheck] = useState("");
  const [Select, setSelect] = useState("");

  // let ii: any = JSON.parse(localStorage.getItem("val"))
  //   ? JSON.parse(localStorage.getItem("val"))
  //   : [];

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
      .get("https://65f4af82f54db27bc0223815.mockapi.io/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        // alert(error);
      });
  }, [setSearch]);
  return (
    <div>
      <div className="hidden 2xl:flex absolut pl-[11px] mt-[-120px] bg-white z-10 items-center gap-2">
        <img src="search.svg" alt="" />
        <input
          type="text"
          placeholder="Searching..."
          className="input-3 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="pt-[5px] 2xl:pt-[95px]">
        <img src="tepa.png" alt="" />
        <p className="flex text-[36px] text-white text-center pb-[30px] 2xl:hidden">
          All products
        </p>
        <div className="container">
          <div className="block 2xl:flex justify-between items-start gap-3">
            <div className="hidden 2xl:block">
              <p className="text-[16px] pt-[48px] pb-[20px]">Product type</p>
              <div className="flex max-w-md flex-col gap-[12px]" id="checkbox">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="pro"
                    value="Furniture"
                    onChange={(e) => setCheck!(e.target.value)}
                  />
                  <Label htmlFor="pro">Furniture</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">Homeware</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">Sofas</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">Light fittings</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">Accessories</Label>
                </div>
              </div>
              <p className="text-[16px] pt-[48px] pb-[20px]">Price</p>
              <div className="flex max-w-md flex-col gap-[12px]" id="checkbox">
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">0 - 100</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">101 - 250</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">250 +</Label>
                </div>
              </div>
            </div>
            <div className="container mt-[-80px] pb-[4px] mx-auto 2xl:hidden">
              <select
                name="select"
                id="select"
                className="mx-auto pt-12px] w-full"
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">All</option>
                <option value="Healthy">Furniture</option>
                <option value="Trending">Homeware</option>
                <option value="Supreme">Sofas</option>
                <option value="Supreme">Light fittings</option>
                <option value="Supreme">Accessories</option>
              </select>
            </div>
            <div className="block 2xl: py-[30px]">
              <div className="flex flex-wrap gap-[16px] items-center  2xl:flex flex-wrap justify-end gap-3 items-center">
                {product
                  .filter((product) => {
                    if (Search === "" && Select === "") {
                      return product;
                    } else if (
                      product.name
                        .toLowerCase()
                        .includes(Search.toLowerCase()) &&
                      product.category
                        .toLowerCase()
                        .includes(Select.toLowerCase())
                    ) {
                      return product;
                    }
                  })
                  .map((product) => (
                    <div
                      key={product.id}
                      className="w-[163px] pb-[20px] 2xl:w-[305px]"
                    >
                      <Link href={`/products/${product.id}`}>
                        <img
                          src={product.img}
                          alt=""
                          className="hidden 2xl:block w-[305px] h-[375px]"
                        />
                        <img
                          src={product.img}
                          alt=""
                          className="h-[201px] w-[163px] 2xl:hidden"
                        />
                      </Link>
                      <p className="text-[20px] pt-[24px] pb-[8px]">
                        {product.name}
                      </p>
                      <div className="flex justify-between items-">
                        <p className="text-[18px]">{product.price}</p>
                        <button onClick={() => shop(product.id)}>
                          <img
                            src="cart.svg"
                            alt="cart.svg"
                            className="pr-[10px]"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center items-center">
                <button className="hidden 2xl:block bg-[#F9F9F9] px-[32px] py-[16px]">
                  Load more
                </button>
                <button className="block mt-[15px] mb-[20px] w-[342px] bg-[#F9F9F9] px-[32px] py-[16px] 2xl:hidden">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
