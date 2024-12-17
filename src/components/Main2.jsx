import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Main2 = () => {
  return (
    <div className="px-4 py-5">
      <div id="items" className="mb-4">
        <h4 className="font-semibold text-lg md:text-xl">3425 ITEMS</h4>
      </div>
      <div
        id="hideFilter"
        className="flex items-center justify-between border-t border-b py-3 md:py-4"
      >
        <span id="arrow" className="text-sm md:text-base text-gray-600">
          <FiChevronDown />
        </span>
        <h4 className="text-sm md:text-base font-medium">Hide Filter</h4>
      </div>
      <div id="Recommended" className="mt-4">
        <h4 className="text-lg md:text-xl font-semibold">
          Recommended Products
        </h4>
      </div>
    </div>
  );
};

export default Main2;
