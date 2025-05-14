import React from 'react'
import Slider from './Slider'
import Slidhome from './Slidhome'
import { ImOpt } from 'react-icons/im'
import Styles from './Styles'

const Home = () => {
  return (
    <div>
      <Slider></Slider>

      <Styles />



      <div class="grid gap-4 p-4 md:grid-cols-4  justify-center  ">

        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://m.media-amazon.com/images/I/81pt689dyuL._AC_UL320_.jpg" alt="" />
          <h3 class="text-lg font-semibold mb-2">Card Title 1</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>

        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://m.media-amazon.com/images/I/71Wby-D1E0L._AC_UL320_.jpg" alt="" />
          <h3 class="text-lg font-semibold mb-2">Card Title 3</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>

        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://m.media-amazon.com/images/I/71RNqgFVWiL._AC_UL320_.jpg" alt="" />
          <h3 class="text-lg font-semibold mb-2">Card Title 2</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>



        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://m.media-amazon.com/images/I/71hvUU0mZiL.__AC_SX342_SY445_QL70_FMwebp_.jpg" alt="" />
          <h3 class="text-lg font-semibold mb-2">Card Title 4</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>

      </div>

      <div>


        <h1 className='justify-center items-center flex font-extrabold text-2xl'>NEW Arrival</h1>
        <div className='   grid gap-4 md:grid-cols-3 p-10 '>
          <div><img src="https://themewagon.github.io/stylish/images/card-item6.jpg" alt="" /></div>
          <div> <img src="https://themewagon.github.io/stylish/images/card-item7.jpg" alt="" /></div>
          <div> <img src="https://themewagon.github.io/stylish/images/card-item8.jpg" alt="" /></div>
        </div>
      </div>



      <div class="grid gap-4 p-4 md:grid-cols-4 justify-center  ">

        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src='https://themewagon.github.io/stylish/images/card-item1.jpg' alt="Card Image" class="w-95 h-50 object-cover rounded-t-lg mb-4" />
          <div className='justify-items-center'>
            <p class="text-gray-600">Running shoes for men
              $99.</p>
            <button className='border-1  bg-blue-300 w-40 h-10 rounded-xl'>Shop now</button>
          </div>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://themewagon.github.io/stylish/images/card-item2.jpg" alt="Card Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />
          <div className='justify-items-center'>
            <p class="text-gray-600"> For Unisex $45.</p>
            <button className='border-1  bg-blue-300 w-40 h-10  rounded-xl'>Shop now</button>
          </div>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://themewagon.github.io/stylish/images/card-item3.jpg" alt="Card Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />
          <div className='justify-items-center'>
            <p class="text-gray-600">For Gym $70.</p>
            <button className='border-1  bg-blue-300 w-40 h-10 rounded-xl'>Shop now</button>
          </div>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://themewagon.github.io/stylish/images/card-item4.jpg" alt="Card Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />

          <div className='justify-items-center'>
            <p class="text-gray-600">Fashion Shoe for Women $80.</p>
            <button className='border-1  bg-blue-300 w-40 h-10 rounded-xl '>Shop now</button>

          </div>
        </div>
      </div>










      <div class="grid gap-4 p-4 md:flex">


        <div className='flex'>

          <div class=" bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71wp-f9m0-L._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80" />
            <div className='justify-items-center'>

            </div>
          </div>


          <div class=" bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71ISTYxoRgL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80" />
            <div className='justify-items-center'>

            </div>
          </div>
        </div>

        <div className='flex'>

          <div class=" bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/61hDQfyQtrL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80" />
            <div className='justify-items-center'>

            </div>
          </div>


          <div class=" bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/91eAfqVcCwL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80" />
            <div className='justify-items-center'>

            </div>
          </div>
        </div>
      </div>

      <div class=" grid gap-4 p-4 md:flex ">

        <div className='flex gap-1'>

          <div class="w bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/7163aaK3S+L._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>
          <div class=" bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71D0gFiJ0kL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>
        </div>


        <div className='flex gap-1'>

          <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71qfNbRk60L._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>


          <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71ptM7-AdzL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-40 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>

        </div>
      </div>

      <div class=" grid gap-4 p-4 md:flex ">

        <div className='flex gap-1'>

          <div class="w bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/611OiN+n7vL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>
          <div class=" bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71ePaj6nl8L._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>
        </div>


        <div className='flex gap-1'>

          <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/81kZaGI4KmL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>


          <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71V2xQaT+UL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-40 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>

        </div>
      </div>
      <div class=" grid gap-4 p-4 md:flex ">

        <div className='flex gap-1'>

          <div class="w bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71t6rUru5nL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>
          <div class=" bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/61S60KLrNRL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>
        </div>


        <div className='flex gap-1'>

          <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71oFBv1LbdL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>


          <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71BJipxKGqL._AC_SY200_.jpg' alt="Card Image" class="w-30 h-40 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Home
