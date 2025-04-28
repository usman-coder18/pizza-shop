import { Actiontypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalitems: 0,
  totalPrice: 0,
};

export const useCartStore = create<CartType & Actiontypes>()(
  persist(
    (set, get) => ({

      products: INITIAL_STATE.products,
      totalitems: INITIAL_STATE.totalitems,
      totalPrice: INITIAL_STATE.totalPrice,

      addToCart: (item) => {
        const products = get().products
       const productInState= products.find(product => product.id === item.id);

       if (productInState) {

const updatedProducts = products.map(product => product.id===productInState.id ? {
    ...item,
    quantity:  item.quantity +product.quantity,
    price: item.price + product.price,
} : item)
set((state)=>({
    products: updatedProducts,
    totalitems: state.totalitems + item.quantity,
    totalPrice: state.totalPrice + item.price,
}))
       }else{
        set((state) => ({
            products: [...state.products, item],
            totalitems: state.totalitems + item.quantity,
            totalPrice: state.totalPrice + item.price * item.quantity,
          }));
       }
       
      },

      removeFromCart: (item) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== item.id),
          totalitems: state.totalitems - item.quantity,
          totalPrice: state.totalPrice - (item.price * item.quantity),
        }));
      },
    }),
    {
      name: "cart",
      skipHydration:true // this is the name of the localStorage key
    }
  )
);
