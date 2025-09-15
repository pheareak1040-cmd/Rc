import React from "react";

const products = [
  { id: 1, name: "Laptop Pro", price: 1200, image: "1.png" },
  { id: 2, name: "Smartphone X", price: 800, image: "2.png" },
  { id: 3, name: "Wireless Headphones", price: 150, image: "3.png" },
  { id: 4, name: "Smartwatch", price: 250, image: "4.png" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">SmartShop</h1>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {}
      <main className="flex-grow p-6">
        <h2 className="text-3xl font-bold text-center mb-10">🛒 Shop Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-4 flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {}
      <footer className="bg-gray-800 text-white py-6 mt-8 text-center">
        <p>© {new Date().getFullYear()} SmartShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
