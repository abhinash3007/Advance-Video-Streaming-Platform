import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-4 bg-gray-100 text-black w-60 h-screen shadow-lg">
      <ul>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="home" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Home
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="shorts" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Shorts
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="subscriptions" src="https://tse1.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Subscriptions
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="trending" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Trending
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="music" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Music
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="shopping" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Shopping
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="cricket" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Cricket
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="football" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Football
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="movies" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Movies
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 cursor-pointer rounded-md">
          <img className="h-6 w-6 mr-3" alt="comedy" src="https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180" />Comedy
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
