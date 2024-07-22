import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsComponents from './CommentsComponents';
import ChatMessage from './ChatMessage';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className='flex w-full flex-col'>
    <div className="flex py-6 w-full">
      <iframe 
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
      <div className='w-[430px] '>
        <ChatMessage />
      </div>
    </div>
    <div>
        <CommentsComponents />
    </div>
    </div>
  );
};

export default WatchPage;
