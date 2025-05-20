// src/components/SingleProduct.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = ({ Cart, setCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // You can also move this to a global state or a shared file
  const products = [
    {
      id: 1,
      title: "Casual Streetwear",
      price: 40,
      image: "https://m.media-amazon.com/images/I/71gvJnWVtyL._AC_UL320_.jpg"
    },
    // ... rest of the products
    {
      id: 8,
      title: "Denim Style Jacket",
      price: 55,
      image: "https://m.media-amazon.com/images/I/71BJipxKGqL._AC_SY200_.jpg"
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  const handleAddToCart = () => {
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

  if (!product) return <div className="text-center mt-10">Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 grid md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.title} className="w-full h-auto rounded-lg shadow" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl text-gray-700">${product.price}</p>
        <p className="text-gray-600">This is a detailed description of the product. You can customize this as needed.</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
