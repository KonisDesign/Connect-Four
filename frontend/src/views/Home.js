import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Views.scss'

export default function Home() {

    const navigate = useNavigate()
    const gameid = Math.floor(Math.random() * 8999) + 1000;
    const [joinCode, setJoinCode] = useState("")


    const [formData, setFormData] = useState({
      Game: gameid.toString(),
      Board: ["0", "0", "0", "0", "0", "0", "0",
        "0", "0", "0", "0", "0", "0", "0",
        "0", "0", "0", "0", "0", "0", "0",
        "0", "0", "0", "0", "0", "0", "0",
        "0", "0", "0", "0", "0", "0", "0",
        "0", "0", "0", "0", "0", "0", "0"],
      Who: 'r'
    });

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        await fetch('http://localhost:8888/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        navigate('/play/r/' + gameid.toString());
      } catch (error) {
        console.error(error);
      }
    };

    const joinGame = (event) => {
      event.preventDefault()

      navigate('/play/y/' + joinCode)

    }

  return (
    <div className='home-container'>
      <h1>Connect Four</h1>
        <button className='primary-button' onClick={(event) => handleSubmit(event)}>Create a game</button>
        <p>OR</p>
        <input type='text' placeholder='1234' onChange={(e) => setJoinCode(e.target.value)}/>
        <button className='primary-button' onClick={(event) => joinGame(event)}>Join a game</button>
    </div>
  )
}
