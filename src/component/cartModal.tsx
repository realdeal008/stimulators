"use client";

import React from "react";
import { useCart } from "../component/useCart";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cart-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="cart-modal"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <>
                <ul className="cart-items">
                  {cart.map((item, index) => (
                    <li key={index}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
                <p className="total">Total: ${total}</p>
                <button className="clear-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </>
            )}
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
