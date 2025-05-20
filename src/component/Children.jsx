import React from 'react'

import { useNavigate } from 'react-router-dom';

const Children = ({ Cart, setCart }) => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Bedtime stories",
      price: 40,
      image: "https://m.media-amazon.com/images/I/91XZyl0ANhL._AC_UY218_.jpg"
    },
    {
      id: 2,
      title: "Brown Bear",
      price: 65,
      image: "https://m.media-amazon.com/images/I/81kZ3Gl3WKL._AC_UY218_.jpg"},
    {
      id: 3,
      title: "girl's summer cloth",
      price: 35,
      image: "https://m.media-amazon.com/images/I/61AS3ppgPML._AC_UL320_.jpg"
    },
    {
      id: 4,
      title: "13 in 1 Dinus toys",
      price: 20,
      image: "https://m.media-amazon.com/images/I/81wC5hSzZbL._AC_UL320_.jpg"
    },
    {
      id: 5,
      title: "Leap Frog",
      price: 15,
      image: "https://m.media-amazon.com/images/I/71wQb2LWUkL._AC_UL320_.jpg"
    },
    {
      id: 6,
      title: "Toddler sock shoe",
      price: 12,
      image: "https://m.media-amazon.com/images/I/51Z0AzDhpSL._AC_UL320_.jpg"
    },
    {
      id: 7,
      title: "Yakiss Toddler boys & Girls",
      price: 12,
      image: "https://m.media-amazon.com/images/I/81hCuY7FwgL._AC_UL320_.jpg"
    },
    {
      id: 8,
      title: "Children Girls sleeve",
      price: 14,
      image: "https://m.media-amazon.com/images/I/71tTm9mZuyL._AC_UL320_.jpg"
    }
,

    {
      id: 8,
      title: "Hockvill Lcd Writting",
      price: 14,
      image: "https://m.media-amazon.com/images/I/81SNfYf1D5L._AC_UL320_.jpg"
    }
  ];

  const handleAddToCart = (product) => {
    const existingItem = Cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(
        Cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      setCart([...Cart, { ...product, quantity: 1 }]);
    }

    navigate('/Cart');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Kid's Fashion and Play zone</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src={product.image} alt={product.title} className="w-full h-80  rounded mb-2" />
            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
            <p className="text-gray-800 font-bold mb-2">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Children;
