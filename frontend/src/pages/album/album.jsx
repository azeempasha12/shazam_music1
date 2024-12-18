import React, { useEffect, useState } from "react";

export default function Album() {
  const [data, setData] = useState(null);

  const albumData = async () => {
    const url = "https://shazam.p.rapidapi.com/albums/get-details?id=850576570&l=en-US";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b2c8185a3msh44fdd6f55848e3ep10eef1jsnacc300209e24",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data[0]?.attributes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    albumData();
  }, []);

  if (!data) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const {
    artistName,
    name,
    artwork,
    copyright,
    editorialNotes,
    genreNames,
    recordLabel,
    audioTraits,
  } = data;

  return (
    <div className="flex flex-col items-center p-12 md:p-10 lg:p-24">
      {/* Album Artwork and Basic Info */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Album Artwork */}
        <img
          src={artwork.url.replace("{w}x{h}", `${artwork.width}x${artwork.height}`)}
          alt={name}
          className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-lg mt-6"
        />

        {/* Album Info */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center lg:text-left">{name}</h1>
          <h2 className="text-xl font-medium text-blue-600 mb-4">By {artistName}</h2>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-6">
            {genreNames.map((genre, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Audio Traits */}
          <div className="flex flex-wrap gap-2">
            {audioTraits.map((trait, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial Notes */}
      <div className="w-full mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">About the Album</h3>
        <p className="text-gray-600 leading-relaxed">{editorialNotes?.standard}</p>
      </div>

      {/* Details Section */}
      <div className="w-full mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Album Details</h3>
        <ul className="text-gray-600 space-y-2">
          <li>
            <strong>Record Label:</strong> {recordLabel}
          </li>
          <li>
            <strong>Copyright:</strong> {copyright}
          </li>
        </ul>
      </div>
    </div>
  );
}