const Player = (playerName, playerMark) =>{
    const getPlayerName = () => playerName;
    const getPlayerMark = () => playerMark;

    return {getPlayerName, getPlayerMark};
}

const GameBoard = ((player1, player2) =>{
    let gameBoard = [[],[],[]];
    let playerMark;
    let playerCounter = 0;
    let isThereAWinner = false;
    const tiles = document.querySelectorAll(".boardTile");
    tiles.forEach(event => event.addEventListener('click', setTiles,{once:true}));
    let currentPlayer;
    function initiateCells(){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){

            }
        }
    }
    
    function removeButtonEvents(){
        tiles.forEach(event=>event.removeEventListener('click',setTiles));
    }

    function setTiles(e){  
        playerTurn();
        // removeButtonEvents(e);  
        e.target.textContent = playerMark;
        gameBoard[e.target.getAttribute("tileRow")][e.target.getAttribute("tileColumn")] = playerMark;
        checkWinner(e);
        checkTieGame();
    }

    function checkWinner(e){
        if(threeInARow(e)){
            isThereAWinner = true;
            console.log(`Winner is: ${currentPlayer}`);
            removeButtonEvents();
        }
    }

    function checkTieGame(){
        if(playerCounter==9 && isThereAWinner == false){
            console.log('Tie game');
        }
    }

    // this function alternates between X or O to put on the gameBoard
    function playerTurn(){
        if(playerCounter % 2 == 0){
            currentPlayer = player1.getPlayerName();
            playerMark = player1.getPlayerMark();
        }else {
            currentPlayer = player2.getPlayerName();
            playerMark = player2.getPlayerMark();

        }
        playerCounter++;
    }

    function threeInARow(marked){
        
        
        let firstAdjacentRow = gameBoard[marked.target.getAttribute("tileRow")][(marked.target.getAttribute("tileColumn") + 1) %3];
        let secondAdjacentRow = gameBoard[marked.target.getAttribute("tileRow")][(marked.target.getAttribute("tileColumn") + 2) %3];
        let firstAdjacentColumn = gameBoard[(marked.target.getAttribute("tileRow") + 1) %3][marked.target.getAttribute("tileColumn")];
        let secondAdjacentColumn = gameBoard[(marked.target.getAttribute("tileRow") + 2) %3][marked.target.getAttribute("tileColumn")];


        if(gameBoard[marked.target.getAttribute("tileRow")][marked.target.getAttribute("tileColumn")] == firstAdjacentRow 
            && firstAdjacentRow == secondAdjacentRow) return true;
        else if(gameBoard[marked.target.getAttribute("tileRow")][marked.target.getAttribute("tileColumn")] == firstAdjacentColumn
            && firstAdjacentColumn == secondAdjacentColumn) return true;
        else if(marked.target.getAttribute("tile") % 2 == 0){
            //check diagonals
            if((gameBoard[0][0]!= undefined && (gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2])) || 
            (gameBoard[0][2]!= undefined && gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][0])) return true;
        else return false;        
        }

    
    }
    return {gameBoard};
})(Player('player 1', 'X'), Player('player 2', 'O'));






