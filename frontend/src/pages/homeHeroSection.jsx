import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Left Image Section */}
        <div className="flex justify-center md:justify-start md:w-1/2">
          <div className="relative">
            <img
              src="https://assets.shazam.com/website/images/home/group.webp" 
              alt="Mobile App"
              className="w-56 h-auto md:w-64 lg:w-80 shadow-xl"
            />
            <img
              src="https://assets.shazam.com/website/images/home/group.webp" 
              alt="Shazam App"
              className="absolute -right-12 top-6 w-56 h-auto md:w-64 lg:w-80 shadow-xl"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Name songs in seconds
          </h1>
          <p className="text-lg lg:text-xl text-white mt-4">
            Find music, concerts, and more with Shazam.
          </p>

          <div className="bg-blue-500 p-4 rounded-lg shadow-md mt-6 flex items-center">
            <img
              src="https://assets.shazam.com/website/images/home/95x95/qrcode.webp"
              alt="QR Code"
              className="w-20 h-20"
            />
            <div className="ml-4">
              <p className="font-bold text-lg">Get the app</p>
              <p className="text-gray-600">
                Scan the code with your smartphone camera to download the free app.
              </p>
              <div className="flex space-x-2 mt-2">
                <a href="/" className="text-white underline">
                  iOS
                </a>
                <span className="text-gray-400">|</span>
                <a href="/" className="text-white underline">
                  Android
                </a>
                <span className="text-gray-400">|</span>
                <a href="/" className="text-white underline">
                  more devices
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
