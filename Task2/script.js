window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reset-btn').addEventListener('click', resetBoard = () => { location.reload(); });
    const boxCollection = Array.from(document.querySelectorAll('.container div'));

    let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let playerTurn = true;

    boxCollection.forEach((box) => {
        box.addEventListener('click', play);
    });

    function play(e) {
        if (!playerTurn) return;

        let currentBox = e.currentTarget;

        if (!currentBox.style.backgroundColor) {
            currentBox.style.backgroundColor = 'red';
            let currentIndex = parseInt(currentBox.classList.value.split(' ')[1].split('-')[1]);
            let removedIndex = board.indexOf(currentIndex);
            board.splice(removedIndex, 1);
            playerTurn = false;

            let randomIndex;
            for (let i = 0; i <= board.length; i++) {
                if (board.includes(randomIndex)) {
                    continue;
                } else {
                    randomIndex = Math.floor(Math.random() * board.length);
                    let nextMoveIndex = board[randomIndex];
                    let nextMove = boxCollection[nextMoveIndex];

                    setTimeout(() => {
                        if (!nextMove) return;

                        nextMove.style.backgroundColor = 'green';
                        board.splice(randomIndex, 1);
                        playerTurn = true;
                    }, 500);
                    return;
                }
            }
        }
    }
});
