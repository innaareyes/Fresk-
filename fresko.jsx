import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product 1", description: "Minimalist description of product 1." },
    { id: 2, name: "Product 2", description: "Minimalist description of product 2." },
    { id: 3, name: "Product 3", description: "Minimalist description of product 3." }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Minimalist Store</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#cart" className="hover:underline">Cart ({cart.length})</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-24">
        <h2 className="text-4xl font-semibold mb-4">Timeless Minimalist Pieces</h2>
        <p className="max-w-xl text-gray-600 mb-6">
          Discover curated essentials designed for simplicity, elegance, and everyday use.
        </p>
        <a href="#shop" className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Shop Now
        </a>
      </section>

      {/* Shop Section */}
      <section id="shop" className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
            <div className="h-48 bg-gray-100 mb-4 flex items-center justify-center">
              <span className="text-gray-400">Image {product.id}</span>
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="text-center py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Our store is built on the principle of simplicity. We believe in high-quality, timeless designs that focus on essentials, not excess.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-20 px-6 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">Email us at: hello@minimaliststore.com</p>
        <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Contact Us
        </button>
      </section>

      {/* Cart Section */}
      <section id="cart" className="text-center py-20 px-6 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 mb-6">You currently have no items in your cart.</p>
        ) : (
          <div className="max-w-md mx-auto space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <span>{item.name}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <button className="mt-8 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Checkout
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-200 text-gray-500 text-sm">
        © {new Date().getFullYear()} Minimalist Store. All rights reserved.
      </footer>
    </div>
  );
}
