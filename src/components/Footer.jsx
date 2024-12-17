import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-6 mt-10">
      
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        
        <div id="signup" className="flex flex-col lg:w-1/3 space-y-4">
          <h2 className="text-xl font-bold">Be the first to know</h2>
          <h3 className="text-gray-400">
            Sign up for updates from mettā muse.
          </h3>
          <form action="#" className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-auto flex-grow p-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        
        <div id="contactus" className="lg:w-1/3 space-y-4">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <h3 className="text-gray-400">Email: info@mettamuse.com</h3>
          <h3 className="text-gray-400">Phone: (123) 456-7890</h3>
        </div>

        
        <div id="currency" className="lg:w-1/3 space-y-4">
          <h2 className="text-xl font-bold">USD</h2>
          <h3 className="text-gray-400">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </h3>
        </div>
      </div>

      
      <hr className="border-gray-700 my-6" />
    </div>
  );
};

export default Footer;
