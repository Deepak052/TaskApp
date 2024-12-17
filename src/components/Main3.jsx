import React from "react";

const Main3 = () => {
  return (
    <div className="main-container flex flex-wrap justify-between p-4">
      <div
        id="customize"
        className="customize-section flex flex-col gap-2 w-full sm:w-1/4 p-2"
      >
        <form action="#">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="customize" id="customize-checkbox" />
            <label htmlFor="customize-checkbox">Customize</label>
          </div>
          <br />

          <label htmlFor="ideal-for" className="block mb-1">
            Ideal For
          </label>
          <select name="ideal" id="ideal-for" className="w-full p-2 ">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
          <br />

          <label htmlFor="occasion" className="block mb-1">
            Occasion
          </label>
          <select name="occasion" id="occasion" className="w-full p-2 ">
            <option value="All">All</option>
          </select>
          <br />

          <label htmlFor="work" className="block mb-1">
            Work
          </label>
          <select name="work" id="work" className="w-full p-2">
            <option value="All">All</option>
          </select>
          <br />
        </form>
      </div>

      <div
        id="NewProduct"
        className="new-product-section flex flex-col gap-4 w-full sm:w-3/4 p-2"
      >
        <h3 className="text-xl font-bold">New Product</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="card bg-white shadow-md rounded-lg flex flex-col">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://via.placeholder.com/500x300"
              alt="Product Image"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">Product Title</h2>
              <p className="text-gray-700 text-sm">Product Description</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>

          <div className="card bg-white shadow-md rounded-lg flex flex-col">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://via.placeholder.com/500x300"
              alt="Product Image"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">Product Title</h2>
              <p className="text-gray-700 text-sm">Product Description</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>

          <div className="card bg-white shadow-md rounded-lg flex flex-col">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://via.placeholder.com/500x300"
              alt="Product Image"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">Product Title</h2>
              <p className="text-gray-700 text-sm">Product Description</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>

          <div className="card bg-white shadow-md rounded-lg flex flex-col">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://via.placeholder.com/500x300"
              alt="Product Image"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">Product Title</h2>
              <p className="text-gray-700 text-sm">Product Description</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg flex flex-col">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://via.placeholder.com/500x300"
              alt="Product Image"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">Product Title</h2>
              <p className="text-gray-700 text-sm">Product Description</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg flex flex-col">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://via.placeholder.com/500x300"
              alt="Product Image"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">Product Title</h2>
              <p className="text-gray-700 text-sm">Product Description</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg flex flex-col">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://via.placeholder.com/500x300"
              alt="Product Image"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">Product Title</h2>
              <p className="text-gray-700 text-sm">Product Description</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>

          <div className="card bg-white shadow-md rounded-lg flex flex-col">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://via.placeholder.com/500x300"
              alt="Product Image"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">Product Title</h2>
              <p className="text-gray-700 text-sm">Product Description</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
