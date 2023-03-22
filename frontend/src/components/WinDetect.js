export const WinDetect = (board, setEndGame) => {
    let i = 41;

    while (i !== 0) {
        if (board[i] === 'r' || board[i] === 'y') {
            if (i >= 21 && board[i] === board[i - 7] && board[i] === board[i - 14] && board[i] === board[i - 21]) {
                setEndGame(true)
            } else if (i > 37 || (i > 30 && i < 35) || (i > 23 && i < 28) || (i > 16 && i < 21) || (i > 9 && i < 14) || (i > 2 && i < 7)) {
                if (board[i] === board[i - 1] && board[i] === board[i - 2] && board[i] === board[i - 3]) {
                    setEndGame(true)
                } else if (board[i] === board[i - 8] && board[i] === board[i - 16] && board[i] === board[i - 24]) {
                    setEndGame(true)
                }
            }
            if ((i < 39 && i > 34) || (i < 32 && i > 27) || (i < 25 && i > 20)) {
                if (board[i] === board[i - 6] && board[i] === board[i - 12] && board[i] === board[i - 18]) {
                    setEndGame(true)
                }
            }
        }
        i--
    }
}