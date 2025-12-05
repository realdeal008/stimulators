"use client";

import { useState } from "react";
import { CartProvider, useCart } from "@/src/component/useCart";
import CartModal from "@/src/component/cartModal";
import Navbar from "@/src/section/Navbar";
import Hero from "@/src/section/Hero";
import Products from "../src/section/product";
import Booking from "../src/section/booking";
import Testimonials from "@/src/section/testimonial";
import Portfolio from "@/src/section/portfolio";
import Footer from "@/src/section/footer";
import Services from "@/src/section/service";

function HomeContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} cartCount={cart.length} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <main className="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <Products />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <HomeContent />
    </CartProvider>
  );
}
