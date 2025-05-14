// App.js
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

const App = () => {
   return (
      <div>
         {/* Always render NavBar and Footer */}
         <NavBar />

         {/* Define routes for the different pages */}
         <Routes>
            <Route path="/" element={<Home />} /> {/* Only renders Home on the root path */}
            <Route path="/Playground" element={<Playground />} />
            <Route path="/about" element={<About />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Men" element={<Men/>} />
            <Route path="/Unisex" element={<Unisex />} />
            <Route path="/Children" element={<Children />} />
         </Routes>

         {/* Footer outside of Routes to always appear */}
         <Footer />
      </div>
   );
};

export default App;
