export const Play = (board, setBoard, setNewPost, newPost, whoPlay, setWhoPlay, column) => {
    const rank = [35, 36, 37, 38, 39, 40, 41]
    let i = rank[column]
    const newBoard = [...board]
    let newTurn = whoPlay
    while (i >= 0) {
        if (newBoard[i] === "0") {
            newBoard.splice(i, 1, whoPlay)
            setBoard(newBoard)
            if (whoPlay === "r") {
                newTurn = "y"
            } else {
                newTurn = "r"
            }
            setWhoPlay(newTurn)
            break
        }
        i -= 7
    }
    setNewPost({...newPost, 
        Board: newBoard,
        Who: newTurn
    
    });
}
