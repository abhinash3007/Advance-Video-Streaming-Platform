import React, { useEffect, useState } from 'react';
import { YOUTUBE_URL } from '../utils/constants';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
const VideoComponent = () => {
    const [videos,setVideos]=useState([])
    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        const response = await fetch(YOUTUBE_URL);
        const json = await response.json();
        console.log(json);
        setVideos(json.items);
    };

    return (
        <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
        {videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id} className="m-4">
            <VideoCart info={video} />
          </Link>
        ))}
        
        </div>
      </div>
    );
};

export default VideoComponent;
