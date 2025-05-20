import React from 'react'

const Contact = () => {
  return (
    <div>
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
        <a href="/contact" className="text-blue-500 hover:underline mt-2 block text-sm">Go to Contact Page</a>
      </div>
    </div>
  )
}

export default Contact
