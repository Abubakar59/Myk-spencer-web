import React from 'react'

const Male = () => {
  return (
    <div>
      <div class="grid gap-4 p-4 md:grid-cols-4  justify-center  ">

        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://m.media-amazon.com/images/I/71gvJnWVtyL._AC_UL320_.jpg" alt="" />
          <h3 class="text-lg font-semibold mb-2">Card Title 1</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <img src="https://m.media-amazon.com/images/I/81D+bCgn8hL._AC_UL320_.jpg" alt="" />
          <h3 class="text-lg font-semibold mb-2">Card Title 2</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">

          <img src="https://m.media-amazon.com/images/I/81JcCMoz5BL._AC_UL320_.jpg" alt="" />          <h3 class="text-lg font-semibold mb-2">Card Title 3</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
        </div>


        <div class="w-75 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">

          <img src="https://m.media-amazon.com/images/I/81XtJ6HRAdL._AC_UL320_.jpg" alt="" />          <h3 class="text-lg font-semibold mb-2">Card Title 4</h3>
          <p class="text-gray-600">Some quick example text to build on the card title.</p>
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

export default Male
