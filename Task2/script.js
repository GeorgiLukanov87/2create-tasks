// window.addEventListener('DOMContentLoaded', () => {
//     let boxCollection = Array.from(document.querySelectorAll('.container div'))
//     boxCollection.forEach((box) => {
//         box.addEventListener('click', play)
//     });

//     let board = [
//         0, 1, 2,
//         3, 4, 5,
//         6, 7, 8,
//     ];

//     let size = board.length;

//     function play(e) {
//         let currentBox = e.currentTarget;
//         debugger
//         if (!currentBox.style['background-color'] && (!'closed'.includes(currentBox.classList))) {
//             currentBox.style['background-color'] = 'green';
//             currentBox.classList.add('closed');
//             currentIndex = currentBox.classList.value.split(' ')[1].split('-')[1];
//             let removed = board.splice(+currentIndex,1)
//             console.log(removed)
//             console.log(board)

//             let size = board.length;
//             let randomIndex = Math.floor(size * Math.random());
//             debugger

//             let nextMove = boxCollection[randomIndex]
//             console.log(boxCollection[randomIndex])

//             do {
//                 console.log(typeof(randomIndex))
//             }
//             while(!randomIndex.includes(board));

//             // setTimeout(() => {



//             // }, 500);


//         }
//     }


// });

window.addEventListener('DOMContentLoaded', () => {
    const boxCollection = Array.from(document.querySelectorAll('.container div'));
    let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let playerTurn = true;  // Added variable to track player's turn

    boxCollection.forEach((box) => {
        box.addEventListener('click', play);
    });

    function play(e) {
        if (!playerTurn) return;  // Exit if it's not the player's turn

        const currentBox = e.currentTarget;

        if (!currentBox.style.backgroundColor && !currentBox.classList.contains('closed')) {
            currentBox.style.backgroundColor = 'red';
            currentBox.classList.add('closed');

            const currentIndex = parseInt(currentBox.classList.value.split(' ')[1].split('-')[1]);
            const removedIndex = board.indexOf(currentIndex);

            board.splice(removedIndex, 1);

            playerTurn = false;  // Set playerTurn to false after the player's move

            let randomIndex;
            for (let i = 0; i <= board.length; i++) {
                if (board.includes(randomIndex)) {
                    continue;
                } else {
                    randomIndex = Math.floor(Math.random() * board.length);
                    const nextMoveIndex = board[randomIndex];
                    const nextMove = boxCollection[nextMoveIndex];

                    setTimeout(() => {
                        nextMove.style.backgroundColor = 'green';
                        nextMove.classList.add('closed');
                        board.splice(randomIndex, 1);
                        playerTurn = true;  // Set playerTurn to true after the computer's move
                    }, 500);
                    return;
                }
            }
        }
    }
});
