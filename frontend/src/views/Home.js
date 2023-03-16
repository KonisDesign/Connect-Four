import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Views.scss'

export default function Home() {

    const navigate = useNavigate()

  return (
    <div className='home-container'>
        <button onClick={() => navigate('/play')}>Start</button>
    </div>
  )
}
