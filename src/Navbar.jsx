import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-secondary text-black p-0">
      <div className="flex space-x-6">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">Places</button>
        <button className="hover:underline">About Us</button>
        <button className="hover:underline">Community Chat</button>
        <button className="hover:underline">Request Services</button>
      </div>
      <button className="bg-primary-800 text-black px-4 py-2 rounded-md">
        User Profile
      </button>
    </nav>
  );
}

export default Navbar;
