import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

  const [value, setValue ]=useState();
  const navigate=useNavigate();
  const handleJoinRoom=useCallback(()=>{
    navigate(`/room/${value}`)
  }, [navigate, value])

  return (
    <div>
      <input type="text" name="" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='enter room code....' id="" />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  )
}

export default Homepage