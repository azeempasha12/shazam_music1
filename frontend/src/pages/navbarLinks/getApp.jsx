import React from "react";

const GetApp = () => {
  const images = [
    {
      url: "https://assets.shazam.com/website/images/apps2/2000x2000/download-phones.webp",
      title: "Happier Than Ever",
      artist: "Billie Eilish",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center max-w-7xl w-full px-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center p-6">
            {/* Large image with no shadow */}
            <img
              src={image.url}
              alt={image.title}
              className="w-full max-w-[1000px] mt-10"
            />
            <h1 className="text-3xl font-bold text-center mt-8">
              Identify, Listen and Discover Songs with the Shazam App
            </h1>
            <h2 className="text-2xl font-semibold mt-4">{image.title}</h2>
            {image.artist && (
              <p className="text-gray-600 text-lg">{image.artist}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 text-center bg-gray-100 p-6 rounded-lg shadow-md">
  <p className="text-lg font-semibold mb-4">Download the Free App</p>
  <img
    src="https://assets.shazam.com/website/images/260x260/apps2/qr-apps.webp" 
    alt="QR Code"
    className="w-32 h-32 mx-auto"
  />
</div>

    </div>
  );
};

export default GetApp;
