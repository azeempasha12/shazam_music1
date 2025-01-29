import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark } from "../reduxToolkit/slices/bookMarkSlices";

export default function Bookmark() {
  const dispatch = useDispatch();
  const [songData, setSongData] = useState([]);

  const bookmarks = useSelector((store) => store.bookmarks.bookmarks);
  console.log("bookmarks", bookmarks);

  useEffect(() => {
    if (bookmarks) {
      setSongData(Object.values(bookmarks));
    }
  }, [bookmarks]);

  const handleRemoveBookmark = (trackId) => {
    dispatch(removeBookmark({ email: userEmail, trackId }));
    console.log("removed")
  };

  return (
    <div className="py-24 px-6 bg-gray-100 min-h-screen flex flex-col items-start">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Bookmarked Songs</h1>
      {songData.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {songData.map((item, index) => (
            <li key={item.id || index} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
              {/* Song Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              
              {/* Song Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h2>
                <p className="text-gray-600 text-sm truncate">{item.subtitle}</p>
              </div>
              
              {/* Remove Button */}
              <button
                className="bg-red-500 text-white px-4 py-2 ml-4 rounded-md hover:bg-red-600 transition"
                onClick={() => handleRemoveBookmark(item.trackId)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg">No bookmarks available.</p>
      )}
    </div>
  );
}