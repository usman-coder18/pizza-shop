"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {
    const { products } = useCartStore();

    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, []);

    const totalItems = products.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link href="/cart" className="flex items-center gap-4">
            <div className="relative w-8 h-8 md:w-5 md:h-5">
                <Image src="/cart.png" alt="" fill />
            </div>
            <span>Cart ({totalItems})</span>
        </Link>
    );
};

export default CartIcon;
