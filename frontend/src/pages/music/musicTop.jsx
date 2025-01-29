import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdBookmark } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, saveBookmarkToDb } from "../../component/reduxToolkit/slices/bookMarkSlices";
import axios from "axios";
 import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MusicChart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const getEmailFromLocalStorage = () => {
  const user = localStorage.getItem('users');
  return user ? JSON.parse(user) : null;
};
const email = getEmailFromLocalStorage();

const user = email?.email || null ;
console.log("email",email);




  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data from API
  const getDataFromApi = async () => {
    try {
      const cachedData = localStorage.getItem("musicChartData");
      if (cachedData) {
        setTracks(JSON.parse(cachedData));
      } else {
        const response = await fetch(
          "https://shazam.p.rapidapi.com/search?term=sunflower&locale=en-US&offset=0&limit=9",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": "3b2c8185a3msh44fdd6f55848e3ep10eef1jsnacc300209e24",
              "x-rapidapi-host": "shazam.p.rapidapi.com",
            },
          }
        );
        const result = await response.json();
        setTracks(result.tracks?.hits || []);
        localStorage.setItem("musicChartData", JSON.stringify(result.tracks?.hits || []));
       
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleBookmarkClick = async (track) => {
    if (!track || !track.images?.coverart) return;

    const songData = {
      email,
      image: track.images.coverart,
      subtitle: track.subtitle,
      title: track.title,
      trackId: track.key,
    };

    if (!email) {
      alert("Please log in to bookmark this track!");
      navigate("/loginpage");
      return;
    }

      try {
         const  response = await axios.post("http://localhost:3000/api/user/login/bookmark",songData);
         console.log('check point 1');
         console.log(response);
         toast.success(response.data.message,{autoClose: 2000});
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.warning("already bookmarked!", { autoClose: 2000 });
        }else {
          toast.error("Something went wrong. Please try again.", { autoClose: 2000 });
        }
      }

    dispatch(addBookmark({ songData }));
    dispatch(saveBookmarkToDb({ email, songData }));
    console.log("data goves to server",email,songData)
    
    
  };



  useEffect(() => {
    getDataFromApi();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-red-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="p-4 font-sans">
        <ToastContainer />
      <h1 className="text-center text-3xl font-bold mb-6">Global Top 200 Chart</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((item, index) => {
          const track = item?.track;
          if (!track) return null;

          const { title, subtitle, images, key } = track;

          return (
            <div
              key={index}
              className="relative flex items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => navigate("/musicDetails", { state: { id: key } })}
            >
              {/* Song Image Container */}
              <div className="relative">
                {/* Cover Image */}
                {images?.coverart && (
                  <img
                    src={images.coverart}
                    alt={title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                  />
                )}

                {/* Bookmark Button - Top Left */}
                <button
                  className="absolute top-0 left-0 bg-blue-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmarkClick(track);
                  }}
                >
                  <MdBookmark size={20} />
                  
                </button>
               
              </div>

              {/* Song Info */}
              <div className="ml-4 flex-1 overflow-hidden">
                <h2 className="text-lg sm:text-xl font-bold truncate">{title || "Unknown Title"}</h2>
                <p className="text-sm sm:text-base text-gray-600 truncate">{subtitle || "Unknown Artist"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
