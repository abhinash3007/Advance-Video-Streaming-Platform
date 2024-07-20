import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='className="p-5 shadow-lg w-48'>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Home</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Shorts</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse1.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Suscriptions</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Trending</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Music</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Shoping</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Cricket</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Football</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Movies</li>
      <li className='flex m-2 p-2'><img className='h-6 mx-1' alt='home' src='https://tse2.mm.bing.net/th?id=OIP.40VZvlM64oPf4V-kwTv-rQHaHa&pid=Api&P=0&h=180' />Comedy</li>
    </div>
  )
}

export default Sidebar;
