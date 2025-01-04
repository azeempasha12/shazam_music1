import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark } from "../reduxToolkit/slices/bookMarkSlices";

export default function Bookmark() {
  const dispatch = useDispatch();

  const bookmarks = useSelector((store) => store.bookmarks.bookmarks);
  console.log("Bookmarkcd",bookmarks)

  const handleRemoveBookmark = (trackId) => {
    dispatch(removeBookmark({ email: userEmail, trackId }));
  };

  return (
    <div className="py-10 px-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Bookmarked Songs</h1>

      {bookmarks && bookmarks.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((item, index) => {
            const songData = item.songData; // Explicitly access songData

            return (
              <li
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Song Image */}
                <img
                  src={songData.image}
                  alt={songData.title}
                  className="w-full h-48 object-cover"
                />

                {/* Song Details */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {songData.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">{songData.subtitle}</p>
                </div>

                {/* Remove Button */}
                <div className="px-4 pb-4">
                  <button
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                    onClick={() => handleRemoveBookmark(songData.trackId)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No bookmarks added yet.
        </p>
      )}
    </div>
  );
}
