import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import CategoryGrid from "./CategoryGrid";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/pic.jpg')" }}>
 {/* Full screen height with flex */}
      <Navbar />
      <SearchBar />
      <div className="flex-1">
      <p className="text-center font-bold text-[26px] text-white mt-4">
  Find your dream HOME
</p>

      
      <CategoryGrid />  {/*new*/}
        {/* Your content goes here */}
        
        
        {/* More content */}
      </div>
      <Footer /> {/* Footer will be placed at the bottom */}
    </div>
  );
}

export default App;

