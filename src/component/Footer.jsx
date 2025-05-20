import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">Myk-Spencer Fashion World</h2>
          <p className="mt-2 text-gray-400">
            Elevate your style with our latest collections of fashion and accessories.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://instagram.com/mykspencer" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
            <a href="https://facebook.com/mykspencer" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
            <a href="https://twitter.com/mykspencer" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/Unisex" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: info@mykspencer.com</p>
          <p className="text-gray-400">Phone: +234 803 063 2690
          </p>
          <p className="text-gray-400">Instagram: @mykspencer</p>
          <p className="text-gray-400">Addresse: shopping complex, J6 Kashim Shettima, opposite university of, Maiduguri 600104, Borno State Nigeria</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Myk-Spencer Boutique. All rights reserved.
        &copy;Abubakar usman Lafiagi
      </div>
    </footer>
  );
};

export default Footer;
