import React from 'react'

const Help = () => {
  return (
    <div>
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
        <a href="#" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Ordering & Payment</a>
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
        <a href="#" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Shipping & Delivery</a>
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
        <a href="#" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Returns & Exchanges</a>
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
        <a href="#" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Account & Profile</a>
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
        <a href="#" className="text-blue-500 hover:underline mt-2 block text-sm">View more about Product Information</a>
      </div>

      {/* Contact Us */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
        <p className="text-gray-700 mb-2">
          Need further assistance? Get in touch with our customer support team.
        </p>
        <ul className="list-none text-gray-700">
          <li className="mb-1">Email: <a href="mailto:support@myk-spencer.com" className="text-blue-500 hover:underline">support@myk-spencer.com</a></li>
          <li className="mb-1">Phone: +234 803 063 2690</li> {/* Replace with your actual number */}
          {/* Add other contact methods if available */}
        </ul>
        <a href="/Contact" className="text-blue-500 hover:underline mt-2 block text-sm">Go to Contact Page</a>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-gray-600">Didn't find what you were looking for?</p>
      <a href="/faq" className="text-blue-500 hover:underline mt-2 inline-block">Frequently Asked Questions (FAQ)</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Help
