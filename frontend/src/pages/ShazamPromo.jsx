import React from 'react';
import { useNavigate } from 'react-router-dom';


const ShazamPromo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Shazam Logo */}
      <div className="absolute top-6 left-6">
      <div className="flex items-center  space-x-2" onClick={handleClick}>
        <img
          src="https://play-lh.googleusercontent.com/EhIjbN-_7eOO6XbcXAosX7elY-9CRxCOm5J6rLZ3pQGF7Yev6Av2kFdbxMH_RV2Hhnc"
          alt="Shazam Logo"
          className="h-8 w-8 rounded-full bg-blue-400"
        />
        <span className="text-xl font-bold text-blue-500">Shazam</span>
      </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* QR Code */}
        <div className="relative bg-white p-4 rounded-lg shadow-lg">
          <img
            src="https://assets.shazam.com/website/images/260x260/apps2/qr-apps.webp" 
            alt="QR Code"
            className="w-40 h-40 rounded-lg"
          />
          <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
            <img
              src="https://www.shazam.com/applemusicclassical" 
              alt="Music Icon"
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-red-600 mt-8">
          Get up to 1 month free of <br /> Apple Music
        </h1>

        {/* Instructions */}
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          1. Scan to redeem the Apple Music offer <br />
          2. Go to the App Store to download Apple Music Classical for free
        </p>
      </div>
    </div>
  );
};

export default ShazamPromo;
