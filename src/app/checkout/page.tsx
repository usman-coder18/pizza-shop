"use client";
import { useCartStore } from "@/utils/store";
import React, { useState, } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { products, totalitems, totalPrice, removeFromCart } = useCartStore();
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const router = useRouter();

  const handleCheckout = () => {
    if (address === "") {
      toast.error("Please provide a shipping address.");
      return;
    }

    toast.success("Checkout successful! Redirecting to confirmation...");
    setTimeout(() => {
      router.push("/thankyou");
    }, 2000);
  };



  return (
    <div className="h-[calc(100vh)] md:h-[calc(100vh)] flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold mt-2">Checkout</h1>

      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your shipping address"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />

        <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-6"
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Stripe">Stripe</option>
        </select>

        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        <div className="space-y-4">
          {products.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.optionTitle}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span>{item.quantity} x ${item.price}</span>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-xl font-semibold mt-4">
          <span>Total Items</span>
          <span>{totalitems}</span>
        </div>
        <div className="flex justify-between text-xl font-semibold">
          <span>Total Price</span>
          <span>${totalPrice}</span>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleCheckout}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
