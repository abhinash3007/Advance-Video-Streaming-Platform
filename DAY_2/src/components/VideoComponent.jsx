import React, { useEffect, useState } from 'react';
import { YOUTUBE_URL } from '../utils/constants';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';

const VideoComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const response = await fetch(YOUTUBE_URL);
    const json = await response.json();
    setVideos(json.items);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <VideoCart info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
