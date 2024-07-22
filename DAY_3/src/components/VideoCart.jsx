import React from 'react';

const VideoCart = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img alt="video" src={thumbnails.medium.url} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="font-bold text-lg mb-1 truncate">{channelTitle}</div>
        <div className="text-gray-700 text-base mb-2 truncate">{title}</div>
        <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {Number(statistics.viewCount).toLocaleString()} views
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
