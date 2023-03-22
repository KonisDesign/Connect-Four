import React from 'react'
import './Components.scss'

export default function Case(props) {

    return (
        <>
            {props.board.map((item, index) => (
                <div key={index} className='case'>
                    <div className={item === 'r' ? 'case-round red' : item === 'y' ? 'case-round yellow' : item === 'rw' ? 'case-round red win' : item === 'yw' ? 'case-round yellow win' : 'case-round'}></div>
                </div>
            ))}
        </>
    )
}