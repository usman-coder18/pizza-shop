"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  console.log("products", products);

  // Dynamically calculate total items and total price
  const totalItems = products.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-auto lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.id}>
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div>
              <h1 className="uppercase text-xl font-bold">{item.title} x{item.quantity}</h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">${item.price}</h2>
            <span className="cursor-pointer" onClick={() => removeFromCart(item)}>X</span>
          </div>
        ))}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span>${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>TOTAL(INCL. VAT)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <Link href="/checkout">
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
