"use client";

import React from "react";
import { useCart, Product as ProductType } from "../component/useCart";
import { motion } from "framer-motion";

const products: ProductType[] = [
  {
    name: "Signature Shampoo",
    price: 35,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03c5a4cb-9aec-4342-b1db-78663b7714e6.png",
    description: "Sulfate-free gentle cleansing for all hair types",
  },
  {
    name: "Repair Mask",
    price: 48,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27474687-ba15-43ad-82a1-45a3f11ecf88.png",
    description: "Intensive moisture treatment for damaged hair",
  },
  {
    name: "Texture Spray",
    price: 28,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3da9a528-1991-4b2b-8ef9-eb664a3e507e.png",
    description: "Lightweight hold with natural-looking texture",
  },
  {
    name: "Shine Serum",
    price: 42,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91ebc898-e73b-42a5-8c5f-2206943871ff.png",
    description: "Weightless gloss enhancer with UV protection",
  },
];

const Products: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <motion.h2
          className="products-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Products
        </motion.h2>
        <p className="products-subtitle">Shop our exclusive line of salon-grade hair care</p>

        <div className="products-grid">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              className="product-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <img src={p.image} alt={p.name} className="products-image" />
              <h3 className="product-name">{p.name}</h3>
              <p className="product-description">{p.description}</p>
              <div className="product-footer">
                <span className="product-price">${p.price}</span>
                <button className="add-to-cart" onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
