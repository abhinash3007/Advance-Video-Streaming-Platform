import React from 'react'
import LiveChat from './LiveChat'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { name } from 'ejs';
import { generateRandomName } from '../utils/helper';
import { useState } from 'react';

const ChatMessage = () => {
    const[comment,setComment]=useState("");
    const dispatch=useDispatch();
    const chatMessage=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
            dispatch(addMessage({
                name:generateRandomName(), 
                message:"Full-Stack MERN devoper" 
        }));
            },500);
       
        return () =>clearTimeout(i);
    },[])
  return (
    <>
    <div className='ml-4 p-2 border border-black w-full rounded-lg bg-slate-100 h-[500px] flex overflow-y-scroll flex-col-reverse'>
      <div>
        {chatMessage.map((c,i)=>(
          <LiveChat key={i} name={c.name} message={c.message}/>
        ))}
      </div>
    </div>
    <form className='w-full ml-4 p-2 border border-black items-center'
    onSubmit={(e)=>{e.preventDefault();
        dispatch(addMessage({
            name:'Abhinash',
            message:comment,
        }))
        setComment('');
    }}>
    <input  type='text' placeholder='pass your commment'
      value={comment}
      onChange={(e)=>setComment(e.target.value)}
      className='border border-black w-80' 
    />
    <button className='ml-4 bg-blue-300 w-14'>Send</button>
    </form>
    </>
  )
}

export default ChatMessage
