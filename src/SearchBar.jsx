import React from "react";

function SearchBar() {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <button className="bg-red-200 text-black px-4 py-2 rounded-full">
        Wish List
      </button>
      <button className="bg-red-200 text-black px-4 py-2 rounded-full">
        Top Suggestions
      </button>
      <button className="bg-sky-400 text-black font-bold px-40 py-2 rounded-full">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
