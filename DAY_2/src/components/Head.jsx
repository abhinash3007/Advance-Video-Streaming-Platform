import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SUGGESTINS_API } from '../utils/constants';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheSearch = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSearch[searchQuery]) {
        setSuggestions(cacheSearch[searchQuery]);
      } else {
        getSearchResult();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);
  const getSearchResult = async () => {
    const response = await fetch(SUGGESTINS_API + searchQuery)
    const json = await response.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }

  const handleToggle = () => {
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
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={((e) => setSearchQuery(e.target.value))}
          onClick={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">Search</button>
        {showSuggestions && searchQuery.length > 0 && (
          <div className="mt-12 fixed bg-white py-2 px-2 w-[35rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-end col-span-2">
        <img className="h-8" alt="user-icon" src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180" />
      </div>
    </div>
  );
};

export default Head;
