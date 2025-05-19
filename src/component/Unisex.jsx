import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unisex = ({ Cart, setCart }) => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Casual Streetwear",
      price: 40,
      image: "https://m.media-amazon.com/images/I/71gvJnWVtyL._AC_UL320_.jpg"
    },
    {
      id: 2,
      title: "Stylish Winter Coat",
      price: 65,
      image: "https://m.media-amazon.com/images/I/81D+bCgn8hL._AC_UL320_.jpg"
    },
    {
      id: 3,
      title: "Classic Blue Shirt",
      price: 35,
      image: "https://m.media-amazon.com/images/I/81JcCMoz5BL._AC_UL320_.jpg"
    },
    {
      id: 4,
      title: "Trendy Jacket",
      price: 70,
      image: "https://m.media-amazon.com/images/I/81XtJ6HRAdL._AC_UL320_.jpg"
    },
    {
      id: 5,
      title: "Hooded Sweatshirt",
      price: 45,
      image: "https://m.media-amazon.com/images/I/71t6rUru5nL._AC_UL320_.jpg"
    },
    {
      id: 6,
      title: "Elegant Suit Set",
      price: 120,
      image: "https://m.media-amazon.com/images/I/61S60KLrNRL._AC_UL320_.jpg"
    },
    {
      id: 7,
      title: "Comfy Hoodie",
      price: 50,
      image: "https://m.media-amazon.com/images/I/71oFBv1LbdL._AC_UL320_.jpg"
    },
    {
      id: 8,
      title: "Denim Style Jacket",
      price: 55,
      image: "https://m.media-amazon.com/images/I/71BJipxKGqL._AC_SY200_.jpg"
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
      <h1 className="text-2xl font-bold text-center mb-6">Men's Fashion</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded mb-2" />
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

export default Unisex;
