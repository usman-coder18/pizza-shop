import Image from "next/image";
import React from "react";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-0.1rem)] flex flex-col lg:flex-row p-6 gap-6 bg-gray-50 overflow-auto">
      {/* PRODUCTS CONTAINER */}
      <div className="min-h-[50vh] lg:h-full lg:w-2/3 2xl:w-1/2 flex flex-col gap-4 overflow-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700">Your Cart</h1>
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
            <Image src="/temporary/p1.png" alt="Pizza" width={80} height={80} className="rounded-md" />
            <div className="flex-1 px-4">
              <h1 className="uppercase text-lg font-semibold">Sicilian</h1>
              <span className="text-gray-600 text-sm">Large</span>
            </div>
            <h2 className="font-bold text-lg">$79.90</h2>
            <button className="text-red-500 hover:text-red-700">
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
      
      {/* PAYMENT CONTAINER */}
      <div className="min-h-fit lg:h-full lg:w-1/2 2xl:w-1/2 p-6 bg-white shadow-md rounded-lg flex flex-col gap-4 justify-center">
        <h1 className="text-2xl font-bold text-gray-700">Order Summary</h1>
        <div className="flex justify-between text-lg">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-xl font-bold">
          <span>TOTAL (INCL. VAT)</span>
          <span>$81.70</span>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg w-full font-semibold mt-4 transition-all">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
