"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
interface userType {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  category: string;
}

const Cart = () => {
  const [Product, setProduct] = useState<userType[]>([]);
  useEffect(() => {
    axios
      .get("https://65ba7779b4d53c066552fb77.mockapi.io/students")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        // alert(error);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-wrap items-center  2xl:p-0 flex justify-between items-center">
        {Product.map((product) => (
          <div key={product.id} className="w-[163px] pb-[20px] 2xl:w-[305px]">
            <img src={product.img} alt="" />
            <p className="text-[20px] pt-[24px] pb-[8px]">{product.name}</p>
            <p className="text-[18px]">£{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
