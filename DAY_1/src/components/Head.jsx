import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch=useDispatch();
  const handleToggle=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-cols-12 items-center p-5 m-2 shadow-lg">
      <div className="flex items-center col-span-2">
        <img className="h-8 cursor-pointer mr-2"
        onClick={handleToggle}
          alt="hamburger"
          src="https://tse4.mm.bing.net/th?id=OIP.wuFx5NE5hmJFuR6qJPEo6QHaHa&pid=Api&P=0&h=180"
        />
        <img className="h-8 mx-2" alt="youtube-logo" src="https://tse4.mm.bing.net/th?id=OIP.xxNZm92rz6ZHHChoF2zZSAHaBp&pid=Api&P=0&h=180" />
      </div>
      <div className="col-span-8 flex justify-center">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">Search</button>
      </div>
      <div className="flex justify-end col-span-2">
        <img className="h-8" alt="user-icon" src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180" />
      </div>
    </div>
  );
};

export default Head;
