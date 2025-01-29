import React, { useEffect, useState } from 'react'; 

export default function Artists() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const artistsData = async () => {
    const cachedData = localStorage.getItem('topSongs'); 

    if (cachedData) {
      setSongs(JSON.parse(cachedData)); // Use cached data
      setLoading(false);
    } else {
      const url = 'https://shazam.p.rapidapi.com/artists/get-top-songs?id=567072&l=en-US';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f03b2fcccamsh4147cfbec335665p10d6d0jsn3f63412b6c07',
          'x-rapidapi-host': 'shazam.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setSongs(result.data || []);
        localStorage.setItem('topSongs', JSON.stringify(result.data || [])); // Cache the fetched data
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    artistsData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen text-xl">Loading...</div>;
  }

  if (!songs.length) {
    return <div className="flex justify-center items-center min-h-screen text-xl">No songs available.</div>;
  }

  return (
    <div className="flex flex-col items-center p-6 md:p-10 lg:p-16">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 py-6">Top Songs by Artist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {songs.map((song, index) => {
          const {
            albumName,
            artistName,
            artwork,
            name,
            genreNames,
            releaseDate,
            url,
          } = song.attributes;
          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
            >
              {/* Album Artwork */}
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={artwork.url.replace("{w}x{h}", `${artwork.width}x${artwork.height}`)}
                  alt={name}
                  className="w-full h-56 object-cover"
                />
              </a>

              {/* Song Details */}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 truncate mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">{artistName}</p>
                <p className="text-gray-500 text-sm mb-4">Album: {albumName}</p>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {genreNames.map((genre, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm">Released: {new Date(releaseDate).toDateString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
