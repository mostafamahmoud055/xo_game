let turn = "X";
let player = document.querySelector(".player");
let squares = document.querySelectorAll(".square");
squares = [...squares];
let winning = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],];
squares.forEach(function (item) {
  item.onclick = function () {
    if (!this.innerHTML == "") return;
    this.innerHTML = turn;
    this.classList.add("disabled");
    checkWinner();
    turn = turn == "X" ? "O" : "X";
    player.innerHTML = turn;
  };
});

function checkWinner() {
  winning.forEach(function (array) {
    let check = array.every((index) => squares[index].innerHTML.trim() == turn);
    if (check) {
      array.forEach((i) => {
        squares[i].classList.add("winner", "win");
      });
      squares.forEach((item) => {
        item.classList.add("disabled");
      });
    }
  });
}
