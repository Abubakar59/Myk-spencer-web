// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Resume from './component/Playground';
import About from './component/About';
import Service from './component/Service';
import Account from './component/Account';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Playground from './component/Playground';
import Women from './component/Women'
import Men from './component/Men';
import Unisex from './component/Unisex';
import Children from './component/Children'
import CartPage from './component/ CartPage'
import Help from './component/Help'

const App = () => {
   const [cart, setCart] = useState([]);

   return (
      <div>
         {/* Always render NavBar and Footer */}
         <NavBar />

         {/* Define routes for the different pages */}
         <Routes>
            <Route path="/" element={<Home  Cart={cart} setCart={setCart}/>} /> {/* Only renders Home on the root path */}
            <Route path="/Playground" element={<Playground />} />
            <Route path="/about" element={<About />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Women" element={<Women Cart={cart} setCart={setCart} />} />

            <Route path="/Men" element={<Men Cart={cart} setCart={setCart}/>} />
            <Route path="/Unisex" element={<Unisex Cart={cart} setCart={setCart}/>} />
            <Route path="/Children" element={<Children Cart={cart} setCart={setCart} />} />

            <Route path="/Help" element={<Help/>} />

            <Route path="/Cart" element={<CartPage cart={cart} setCart={setCart} />} />
         </Routes>

         {/* Footer outside of Routes to always appear */}
         <Footer />
      </div>
   );
};

export default App;
