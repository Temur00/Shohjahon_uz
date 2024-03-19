"use client";
import axios from "axios";
import { Key } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface userType {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  category: string;
}
const Cart2 = () => {
  const [Product, setProduct] = useState<userType[]>([]);

  let ii: any = JSON.parse(localStorage.getItem("val"))
    ? JSON.parse(localStorage.getItem("val"))
    : [];

  const shop = (id: any) => {
    // setX(x + 1);

    const news: userType[] = Product.filter((product) => product.id === id);
    console.log(news, "news");

    const newresult = [...ii, ...news];
    localStorage.setItem("val", JSON.stringify(newresult));
    console.log(newresult);
  };
  useEffect(() => {
    axios
      .get("https://65f4af82f54db27bc0223815.mockapi.io/api/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        // alert(error);
      });
  }, [ii]);

  return (
    <>
      <div className="flex flex-wrap gap-[16px] items-center  2xl:p-0 flex flex-wrap justify-end gap-3 items-center">
        {Product.map((product) => (
          <div key={product.id} className="w-[163px] pb-[20px] 2xl:w-[305px]">
            <Link href={`/products/${product.id}`}>
              {" "}
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
            <p className="text-[20px] pt-[24px] pb-[8px]">{product.name}</p>
            <div className="flex justify-between items-">
              <p className="text-[18px]">{product.price}</p>
              <button onClick={() => shop(product.id)}>
                <img src="cart.svg" alt="cart.svg" className="pr-[10px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart2;
