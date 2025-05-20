import React from 'react';

function HelpSection() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Need Assistance?</h2>
          <p className="mt-2 text-lg text-gray-600">We're here to help you have the best shopping experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ordering & Payment */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ordering & Payment</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-1">How do I place an order?</li>
              <li className="mb-1">What payment methods do you accept?</li>
              <li className="mb-1">Is my payment information secure?</li>
              <li className="mb-1">Can I change or cancel my order?</li>
            </ul>
            <a href="/help/ordering-payment" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Ordering & Payment</a>
          </div>

          {/* Shipping & Delivery */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Shipping & Delivery</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-1">What are your shipping options?</li>
              <li className="mb-1">How much does shipping cost?</li>
              <li className="mb-1">When will my order arrive?</li>
              <li className="mb-1">Do you ship internationally?</li>
            </ul>
            <a href="/help/shipping-delivery" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Shipping & Delivery</a>
          </div>

          {/* Returns & Exchanges */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Returns & Exchanges</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-1">What is your return policy?</li>
              <li className="mb-1">How do I initiate a return?</li>
              <li className="mb-1">Can I exchange an item?</li>
              <li className="mb-1">How long does a return/exchange take?</li>
            </ul>
            <a href="/help/returns-exchanges" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Returns & Exchanges</a>
          </div>

          {/* Account & Profile */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Account & Profile</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-1">How do I create an account?</li>
              <li className="mb-1">How do I reset my password?</li>
              <li className="mb-1">How do I update my profile information?</li>
              <li className="mb-1">What are the benefits of having an account?</li>
            </ul>
            <a href="/help/account-profile" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Account & Profile</a>
          </div>

          {/* Product Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Information</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-1">Where can I find product details?</li>
              <li className="mb-1">What if a product is out of stock?</li>
              <li className="mb-1">Are the product images accurate?</li>
              {/* Add more relevant questions */}
            </ul>
            <a href="/help/product-information" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Product Information</a>
          </div>

          {/* Contact Us */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-gray-700 mb-2">
              Need further assistance? Get in touch with our customer support team.
            </p>
            <ul className="list-none text-gray-700">
              <li className="mb-1">Email: <a href="mailto:support@myk-spencer.com" className="text-blue-500 hover:underline">support@myk-spencer.com</a></li>
              <li className="mb-1">Phone: +234 (XXX) XXX-XXXX</li> {/* Replace with your actual number */}
              {/* Add other contact methods if available */}
            </ul>
            <a href="/contact" className="text-blue-500 hover:underline mt-2 block text-sm">Go to Contact Page</a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Didn't find what you were looking for?</p>
          <a href="/faq" className="text-blue-500 hover:underline mt-2 inline-block">Frequently Asked Questions (FAQ)</a>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Our Story</h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Welcome to myk-spencer, your online destination for quality goods. Founded with a passion for bringing curated designs to everyone, myk-spencer began as a small online shop run with the vision to create a community around quality goods.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Our journey has been driven by a commitment to customer satisfaction and quality. We carefully select each item in our collection, ensuring it meets our standards of craftsmanship and style.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipOxaTgRvj0C5HnfK1XpHxbH5dARDOHnkp0_aI9J=s680-w680-h510-rw" // Replace with an image relevant to your brand
              alt="About myk-spencer"
            />
            <p className="mt-4 text-sm text-gray-500 italic">A glimpse into the myk-spencer world.</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
            At myk-spencer, our mission is to empower our customers to express their individuality through our products and to provide a seamless and enjoyable online shopping experience. We strive to continuously curate new and exciting products and offer exceptional customer support.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">Quality: We believe in offering products that are built to last.</li>
            <li className="mb-2">Customer Focus: Your satisfaction is our top priority.</li>
            <li className="mb-2">Community: We aim to build a strong and engaged community around our brand.</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Thank you for being a part of the myk-spencer journey!</p>
        </div>
      </div>
    </div>
  );
}

function Everything() {
  return (
    <div>
      <AboutUs />
      <HelpSection />
      {/* You can add other sections here as needed */}
    </div>
  );
}

export default Everything;