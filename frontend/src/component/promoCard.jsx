import React from 'react';
import { useNavigate } from 'react-router-dom';

const PromoCard = () => {
    const navigate = useNavigate()

   const handleClick = () =>{
    navigate("/trialPage")
   }
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-gradient-to-b from-red-500 to-red-600 p-12 rounded-xl shadow-2xl text-white w-full max-w-6xl min-h-[350px]">
        <div className="flex items-center mb-6">
          <img
            src="https://play-lh.googleusercontent.com/EhIjbN-_7eOO6XbcXAosX7elY-9CRxCOm5J6rLZ3pQGF7Yev6Av2kFdbxMH_RV2Hhnc" // Replace with your icon URL
            alt="Apple Music Logo"
            className="w-16 h-16 rounded-lg"
          />
        </div>
        <h2 className="text-4xl font-extrabold mb-6">
          Get up to 2 months free of <br /> Apple Music Classical
        </h2>
        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg mt-6 hover:bg-gray-100 transition duration-300" onClick={handleClick}>
          TRY NOW
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
