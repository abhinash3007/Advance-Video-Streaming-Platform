import React from 'react';

const VideoCart = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="m-2 p-2 w-72 shadow-lg">
      <img alt="video" src={thumbnails.medium.url} className="w-full rounded-lg" />
      <ul className="px-6 py-4">
        <li className="font-bold text-xl mb-2">{channelTitle}</li>
        <li className="text-gray-700">{title}</li>
        <li className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {statistics.viewCount} views
        </li>
        </ul>
    </div>
  );
};

export default VideoCart;
