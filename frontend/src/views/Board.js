import React, { useEffect, useState } from 'react';
import Case from '../components/Case';
import { Play } from '../components/Play'
import './Views.scss';

export default function Board() {
    const initialBoard = Array(42).fill('0');
    const [board, setBoard] = useState(initialBoard);

    return (
        <>
            <div className='row'>
            <button onClick={() => Play(board, setBoard, 0)}>Play</button>
            <button onClick={() => Play(board, setBoard, 1)}>Play</button>
            <button onClick={() => Play(board, setBoard, 2)}>Play</button>
            <button onClick={() => Play(board, setBoard, 3)}>Play</button>
            <button onClick={() => Play(board, setBoard, 4)}>Play</button>
            <button onClick={() => Play(board, setBoard, 5)}>Play</button>
            <button onClick={() => Play(board, setBoard, 6)}>Play</button>
            </div>
            <div className='board-container'>
                <Case board={board} />
            </div>
        </>
    );
}
