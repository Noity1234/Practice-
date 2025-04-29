import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";  // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-secondary text-black p-0">


      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Office Address */}
        <div>
        
        
      
          <h3 className="text-lg font-semibold mb-2">Office</h3>
          <p>Home_Hunt_BD</p>
          <p>House-12, Road-5</p>
          <p>Banani, Dhaka, Bangladesh</p>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Service Areas</h3>
          <p>Uttara</p>
          <p> Gulshan</p>
          <p> Banani</p>
          <p> Badda</p>
        </div>


        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <p>Rides</p>
          <p>Maids</p>
          <p>Repairs (Plumbing, Electric, Maids)</p>
        </div>

        {/* Social Media with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} /> {/* Facebook Icon */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} /> {/* Instagram Icon */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} /> {/* Twitter Icon */}
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        © {new Date().getFullYear()} Home_Hunt_BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;