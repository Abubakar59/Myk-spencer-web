import React from 'react';

import { useNavigate } from 'react-router-dom';

const Women = ({ Cart, setCart }) => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Elegant Floral Dress",
      price: 55,
      image: "https://m.media-amazon.com/images/I/718pgSB6UrL._AC_UL320_.jpg"
    },
    {
      id: 2,
      name: "Classic Office Wear",
      price: 42,
      image: "https://m.media-amazon.com/images/I/51NELB6yskL._AC_UL320_.jpg"
    },
    {
      id: 3,
      name: "Casual Summer Dress",
      price: 60,
      image: "https://m.media-amazon.com/images/I/71uFQGEsTBL._AC_UL320_.jpg"
    },
    {
      id: 4,
      name: "Party Wear Maxi",
      price: 80,
      image: "https://m.media-amazon.com/images/I/715nZaNCMRL._AC_UL320_.jpg"
    },
    {
      id: 5,
      name: "Hand bag",
      price: 45,
      image: "https://m.media-amazon.com/images/I/61v5F2tHCEL._AC_UL320_.jpg"
    },
    {
      id: 6,
      name: "Denim backJacket",
      price: 70,
      image: "https://m.media-amazon.com/images/I/713uSERGO-L._AC_UL320_.jpg"
    },
    {
      id: 7,
      name: "Women vintage watch ",
      price: 68,
      image: "https://m.media-amazon.com/images/I/71FSGw72QpL._AC_UL320_.jpg"
    },
    {
      id: 8,
      name: "Track Suit ",
      price: 95,
      image: "https://m.media-amazon.com/images/I/71hCSl6Q2RL._AC_UL320_.jpg"
    },
    {
      id: 9,
      name: "Winter Coat",
      price: 110,
      image: "https://m.media-amazon.com/images/I/51ZY+KF7AxL._AC_UL320_.jpg"
    },
    {
      id: 10,
      name: "Silk Blouse & Pants",
      price: 85,
      image: "https://m.media-amazon.com/images/I/61ZrmlYYuQL._AC_UL320_.jpg"
    }


    ,{
      id:11,
      name:"Adjustable cap for Women",
      price: 5,
      image:"https://m.media-amazon.com/images/I/71nGXZjgLGL._AC_UY218_.jpg"
    }

    ,{
      id:12,
      name: "babyhealthy Womens Crop Varsity Jacket",
      price: 43,
      image: "https://m.media-amazon.com/images/I/61dOUfX14xL._AC_UY218_.jpg",

    }
  ];
  

  const handleAddToCart = (product) => {
    const existingItem = Cart.find(item => item.id === product.id);

    if (existingItem) {
      // If the item exists, increment its quantity
      setCart(
        Cart.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        )
      );
    } else {
      // If the item doesn't exist, add it with a quantity of 1
      setCart([...Cart, { ...product, quantity: 1 }]);
    }
    navigate('/Cart');
  };

  return (
    <div >

     


      <div className='p-4'>
        <h1 className="text-2xl font-bold text-center mb-6">Women's Fashion</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-90  mb-2 rounded" />
              <h3 className="text-lg font-semibold">{product.name}</h3>

              <p className="text-gray-800 font-bold">${product.price}</p>
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
    </div>
  );
};

export default Women;
