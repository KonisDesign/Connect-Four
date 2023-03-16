export const Play = (board, setBoard, column) => {
    const rank = [35, 36, 37, 38, 39, 40, 41]
    let i = rank[column]
    const newBoard = [...board]
    while (i >= 0) {
        if (newBoard[i] === "0") {
            newBoard.splice(i, 1, "r")
            setBoard(newBoard)
            return
        }
        i -= 7
    }
}
