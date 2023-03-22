import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Case from '../components/Case';
import { Play } from '../components/Play'
import { WinDetect } from "../components/WinDetect";
import './Views.scss';
import EndGame from "./EndGame";

export default function Board() {

    const [board, setBoard] = useState([]);
    const [whoPlay, setWhoPlay] = useState("")
    const [endGame, setEndGame] = useState(false)

    const { who, id } = useParams();

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        Game: id,
        Board: [],
        Who: "r"
    });

    const fetchPosts = async () => {
        const response = await axios.get("http://localhost:8888/");
        setPosts(response.data);
        const postToEdit2 = response.data.find((post) => post.Game === id);
        setBoard(postToEdit2.Board)
        setWhoPlay(postToEdit2.Who)
        WinDetect(postToEdit2.Board, setEndGame)
    };

    useEffect(() => {
        fetchPosts();
        setInterval(() => {
            fetchPosts();
        }, 10000);
    }, []);

    const postToEdit = posts.find((post) => post.Game === id);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        event.target.style.display = "none"

        const response = await axios.put(`http://localhost:8888/play/${who}/${postToEdit._id}`, newPost);
        setPosts(posts.map((post) => (post._id === response.data._id ? response.data : post)));
        setNewPost({
            Game: postToEdit.Game,
            Board: board,
            Who: whoPlay,
        });
    };

    return endGame === true ? (
        <>
            <div className='play-container'></div>
            <div className='board-container'>
                <Case board={board} />
            </div>
            <EndGame whoPlay={whoPlay}/>
        </>
    )
        : whoPlay === who ?
            (
                <>
                    <div className='play-container'>
                        <button className={"play-button " + who} onClick={() => Play(board, setBoard, setNewPost, newPost, whoPlay, setWhoPlay, 0)}></button>
                        <button className={"play-button " + who} onClick={() => Play(board, setBoard, setNewPost, newPost, whoPlay, setWhoPlay, 1)}></button>
                        <button className={"play-button " + who} onClick={() => Play(board, setBoard, setNewPost, newPost, whoPlay, setWhoPlay, 2)}></button>
                        <button className={"play-button " + who} onClick={() => Play(board, setBoard, setNewPost, newPost, whoPlay, setWhoPlay, 3)}></button>
                        <button className={"play-button " + who} onClick={() => Play(board, setBoard, setNewPost, newPost, whoPlay, setWhoPlay, 4)}></button>
                        <button className={"play-button " + who} onClick={() => Play(board, setBoard, setNewPost, newPost, whoPlay, setWhoPlay, 5)}></button>
                        <button className={"play-button " + who} onClick={() => Play(board, setBoard, setNewPost, newPost, whoPlay, setWhoPlay, 6)}></button>
                    </div>
                    <div className='board-container'>
                        <Case board={board} />
                    </div>
                </>
            )
            :
            (
                <>
                    <div className='play-container'></div>
                    <div className='board-container'>
                        <Case board={board} />
                    </div>
                    <button className="primary-button" onClick={(event) => {handleFormSubmit(event); WinDetect(board, setEndGame)}}>Play</button>
                </>
            )
}
