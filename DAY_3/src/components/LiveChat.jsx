import React from 'react'

const LiveChat = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm p-2'>
            <img className="h-8" alt="user-icon" src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180" />
            <span className='font-bold px-2'>{name}:</span>
            <span className='m-2'>{message}</span>
        </div>
    )
}

export default LiveChat
