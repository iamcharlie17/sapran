import { useState } from 'react';
import { IoIosPlayCircle } from 'react-icons/io';

const YouTubeVideo = ({ videoId, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative col-span-3 h-full w-full rounded-2xl overflow-hidden">
      {!isPlaying ? (
        <>
          <div
            style={{ backgroundImage: `url(${thumbnail.src})` }}
            className="absolute inset-0 bg-cover bg-center blur-[3px]"
          ></div>
          {/* White Glow*/}
          <div className="absolute inset-0 z-10 bg-gradient-to-l from-white/40 via-white/30 to-transparent rounded-2xl"></div>
          <IoIosPlayCircle 
            className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-white cursor-pointer" 
            onClick={handlePlay}
          />
        </>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeVideo;