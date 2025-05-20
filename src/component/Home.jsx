import React from 'react'
import Slider from './Slider'
import Slidhome from './Slidhome'
import { ImOpt } from 'react-icons/im'
import Styles from './Styles'
import { useNavigate } from 'react-router'
const Home = ({ Cart, setCart }) => {

  const navigate = useNavigate();


  const products = [


    {
      id: 1,
      title: "COOFANDY",
      price: 50,
      image: "https://m.media-amazon.com/images/I/81pt689dyuL._AC_UL320_.jpg"
    },


    {
      id: 2,
      title: "BIRW Wear",
      price: 25,
      image: "https://m.media-amazon.com/images/I/71Wby-D1E0L._AC_UL320_.jpg"
    },

    {
      id: 3,
      title: "J.VER Men Cotton Linen",
      price: 60,
      image: "https://m.media-amazon.com/images/I/71RNqgFVWiL._AC_UL320_.jpg"
    },


    {
      id: 4,
      title: "WIHOLL Womens Tops",
      price: 86,
      image: "https://m.media-amazon.com/images/I/71hvUU0mZiL.__AC_SX342_SY445_QL70_FMwebp_.jpg"
    }

    ,
    {
      id: 5,
      title: "Runing Shoes For Men",
      price: 55,
      image: "https://themewagon.github.io/stylish/images/card-item1.jpg"
    },
    {
      id: 6,
      title: "Nikk",
      price: 35,
      image: "https://themewagon.github.io/stylish/images/card-item3.jpg"
    },
    {
      id: 7,
      title: "Fashion Women Wear",
      price: 77,
      image: "https://themewagon.github.io/stylish/images/card-item4.jpg"
    },
    {
      id: 8,
      title: "under Armor men's Charged",
      price: 71,
      image: "https://m.media-amazon.com/images/I/81iJLmjmuLL._AC_UL320_.jpg"
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






    <div>



      <Slider></Slider>


      <div class="grid gap-4 p-4 md:grid-cols-4  justify-center   ">

        <div class="h-87 bg-white p-6 justify-items-center shadow-lg  hover:shadow-xl transition duration-300">
          <h3 class="text-lg font-semibold mb-4 font-serif">Elevate Your Electronics</h3>

          <div className='flex gap-2' >
            <div>

              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Tablets._SY116_CB549022351_.jpg" alt="" className='h-25 ' />
              <p>Tablet</p>
            </div>
            <div> <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Headphones._SY116_CB549022351_.jpg" alt="" className='h-25 ' />
              <p>Headphone</p>
            </div>
          </div>


          <div className='flex mt-5 gap-2 '>
            <div>

              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Speakers._SY116_CB549022351_.jpg" alt="" className='h-25 ' />
              <p>Music</p>
            </div>

            <div> <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Gaming._SY116_CB549022351_.jpg" alt="" className='h-25 ' />
              <p>Gaming</p></div>

          </div>
        </div>

        <div class="h-87 bg-white p-6 justify-items-center shadow-lg  hover:shadow-xl transition duration-300">
          <h3 class="text-lg font-semibold mb-4">Shop deals in Fashion</h3>

          <div className='flex gap-2' >
            <div>

              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="" className='h-25 ' />
              <p>Jeans under 40K</p>
            </div>
            <div> <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="" className='h-25 ' />
              <p>Tops under 35k</p>
            </div>
          </div>


          <div className='flex mt-5 gap-2 '>
            <div>

              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="" className='h-25 ' />
              <p>Dress under 20k</p>
            </div>

            <div> <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="" className='h-25 ' />
              <p>Shoes under 75k</p></div>

          </div>
        </div>


        <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl ">
          <h3 class="text-lg font-semibold mb-4">Get your game on</h3>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg" alt="" />

        </div>


        <div class="h-87 bg-white p-6 justify-items-center shadow-lg  hover:shadow-xl transition duration-300">
          <h3 class="text-lg font-semibold mb-4">Shop for your home essentials</h3>

          <div className='flex gap-2' >
            <div>

              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg" alt="" className='h-25 ' />
              <p>Cleaning tools</p>
            </div>
            <div> <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg" alt="" className='h-25 ' />
              <p>Home storage </p>
            </div>
          </div>


          <div className='flex mt-5 gap-2 '>
            <div>

              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg" alt="" className='h-25 ' />
              <p>Home Decor</p>
            </div>

            <div> <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg" alt="" className='h-25 ' />
              <p>Bedding</p></div>

          </div>
        </div>
      </div>


      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Men's Fashion</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <img src={product.image} alt={product.title} className="w-full h-90  rounded mb-2" />
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













    </div>

  )
}

export default Home
