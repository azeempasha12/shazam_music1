import { Link, useNavigate, Outlet } from "react-router-dom"; // Import Outlet
import { FaSearch, FaBars } from "react-icons/fa"; // Include Hamburger icon
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signUp"); // Navigating to the signUp page
  };

  return (
    <div>
      {/* Navbar Layout */}
      <nav className="flex items-center justify-between px-2 py-4 bg-white shadow-md fixed w-full h-20 z-10">
        {/* Logo Section */}
        <button className="flex items-center space-x-2" onClick={() => navigate("/")}>
           <img
              src="https://play-lh.googleusercontent.com/mwTU9-4NX-_QlATb6lILSinKI47wAtOM38GjPYRPQSsQOG2hVRY4h9OfEhDxpf8ADQ"
             alt="Shazam Logo"
           className="h-8 w-8 rounded-full bg-blue-400"
          />
         <span className="text-xl font-bold text-blue-500">Shazam</span>
      </button>

        {/* Navigation Links (Visible on larger screens) */}
        <div className="hidden xl:flex space-x-6 text-gray-600 font-medium">
          <button 
            className="text-blue-700 font-bold hover:text-black" 
            onClick={() => navigate("/getapp")}
          >
            GET THE APP
          </button>
          <button  className="text-blue-700 font-bold hover:text-black" onClick={() =>navigate("/album")}>
           ALBUM
          </button>
          <button  className="text-blue-700 font-bold hover:text-black" onClick={() =>navigate("/artists")}>
            ARTISTS
          </button>
          <button  className="text-blue-700 font-bold hover:text-black" onClick={() =>navigate("/bookmark")}>
            BOOKMARK
          </button>
        </div>

        {/* Search Section (Visible on all screen sizes) */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white rounded-full shadow-md w-70 h-10 focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline">
            <input
              type="text"
              placeholder="Search for music"
              className="py-2 lg:px-10 text-gray-700 outline-none rounded-full w-full"
            />
            <button className="lg:px-6 bg-transparent">
              <FaSearch />
            </button>
          </div>

          {/* Connect Button (Visible on larger screens) */}
          <button
            className="hidden xl:flex items-center px-4 py-2 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100"
            onClick={handleClick}
          >
            <span>CONNECT</span>
            <span className="ml-1 text-black pr-2">Music</span>
          </button>

          {/* Hamburger Menu for smaller screens */}
          <button
            className="xl:hidden flex items-center text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Dropdown Menu (Visible when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="absolute top-20 right-6 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 z-50 xl:hidden">
            <Link to="/getapp" className="hover:text-black">
              GET THE APP
            </Link>
            <Link to="/album" className="hover:text-black">
            ALBUM
            </Link>
            <Link to="/artists" className="hover:text-black">
            ARTISTS
            </Link>
            <Link to="/bookmark" className="hover:text-black">
            BOOKMARK
            </Link>
            <button
              className="flex items-center px-4 py-2 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100"
              onClick={handleClick}
            >
              <span>CONNECT</span>
              <span className="ml-1 text-black">Music</span>
            </button>
          </div>
        )}
      </nav>

      {/* This is where the nested route (GetApp) will render */}
      <Outlet />
    </div>
  );
}
