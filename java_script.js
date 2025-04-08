let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function handleClick(index) {
  if (!gameBoard[index]) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    if (checkWin()) {
      document.getElementById("status").innerText = `Player ${currentPlayer} wins!`;
      disableCells();
    } else if (checkDraw()) {
      document.getElementById("status").innerText = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winningConditions.some((condition) => {
    const [a, b, c] = condition;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function checkDraw() {
  return gameBoard.every((cell) => cell !== "");
}

function disableCells() {
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.onclick = null;
  }
}
