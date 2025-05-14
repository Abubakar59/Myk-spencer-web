import React from 'react'
import Slider from './Slider'
import Slidhome from './Slidhome'
import { ImOpt } from 'react-icons/im'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Slider></Slider>



      <div class="grid gap-4 p-4 md:grid-cols-4 ml-1  ">

        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="data:image/jpeg;base64,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" alt="Card Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 class="text-lg font-semibold mb-2">Card Title 1</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOF3j-xQCNcVoxqNAirXoNtA-1P2Col58fw&s" alt="Card Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 class="text-lg font-semibold mb-2">Card Title 2</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBmWoPUqWp-KBtriqBD-UuJGoh4wI9XJKMA&s" alt="Card Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 class="text-lg font-semibold mb-2">Card Title 3</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://m.media-amazon.com/images/I/71RPinQjeCL._AC_SY200_.jpg" alt="Card Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />
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



      <div class="grid gap-4 p-4 md:grid-cols-4">

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






      <div class=" grid gap-4 p-4 md:flex ">

        <div className='flex gap-1'>

          <div class="w bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/61UX9MhA0CL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>
          <div class=" bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/6123AtX5GxL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>
        </div>


        <div className='flex gap-1'>

          <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/71XMoxdOjTL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-50 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
          </div>


          <div class="w- bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <img src='https://m.media-amazon.com/images/I/517A3-FwBrL._AC_UL320_.jpg' alt="Card Image" class="w-30 h-40 rounded-sm  md:w-80 " />
            <div className='justify-items-center'>

            </div>
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
