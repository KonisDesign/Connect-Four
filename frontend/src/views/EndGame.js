import React from 'react'

export default function EndGame(props) {
  return props.whoPlay === 'r' ? (
    <div className='end-container'>
        <h1>Yellow win !</h1>
    </div>
  )
  :
  (
    <div className='end-container'>
        <h1>Red win !</h1>
    </div>
  )
}
