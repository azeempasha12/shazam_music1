import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MusicDetails() {
  const location = useLocation();
  const { id } = location.state || {}; 
  const [songDetails, setSongDetails] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchSongDetails = async (songId) => {
    try {
      const response = await fetch(
        `https://shazam.p.rapidapi.com/songs/get-details?key=${songId}&locale=en-US`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "3b2c8185a3msh44fdd6f55848e3ep10eef1jsnacc300209e24",
            "x-rapidapi-host": "shazam.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setSongDetails(data?.track);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching song details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSongDetails(id);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-red-500 border-solid"></div>
      </div>
    );
  }

  if (!songDetails) {
    return (
      <div className="text-center text-gray-500 mt-6">
        <p>Song details not found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Song Details</h1>
      <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3">
          <img
            src={songDetails.images?.coverart || "default-cover.jpg"}
            alt={songDetails.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-semibold">{songDetails.title}</h2>
          <p className="text-lg text-gray-700">Artist: {songDetails.subtitle}</p>
          <p className="text-lg text-gray-700">Album: {songDetails.album?.title || "Unknown Album"}</p>
          <p className="text-lg text-gray-700 mt-4">{songDetails.description || "No description available."}</p>
          <div className="mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300">
              Play Song
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
