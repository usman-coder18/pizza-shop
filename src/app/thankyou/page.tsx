"use client";
import { useCartStore } from "@/utils/store";
import React from "react";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
  const { products, totalitems, totalPrice } = useCartStore();
  const router = useRouter();

//   useEffect(() => {
    // Check if products are empty before redirecting
    // if (products.length === 0) {
    //   router.push('/');
    // }
//   }, [products, router]);

  if (products.length === 0) {
    return <div>Loading...</div>;  // or a loading spinner, if you prefer
  }

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-green-600">Thank You for Your Order!</h1>
      <p className="text-xl mb-6">Your order has been successfully placed. We are processing your order and will update you shortly.</p>

      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        {products.length === 0 ? (
          <p>Your cart is empty. Please try again later.</p>
        ) : (
          <>
            {products.map(item => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <img src={item.img} alt={item.title} width={100} height={100} className="object-cover rounded-md" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{item.title} x{item.quantity}</h3>
                  <span className="text-sm text-gray-500">{item.optionTitle}</span>
                </div>
                <h4 className="font-bold">${item.price * item.quantity}</h4>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between font-bold">
              <span>Total Items</span>
              <span>{totalitems} items</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Price</span>
              <span>${totalPrice}</span>
            </div>
          </>
        )}
      </div>

      <div className="mt-8">
        <button
          onClick={() => router.push('/')}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
