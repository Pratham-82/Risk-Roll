let rollDiceBtn = document.querySelector(".Roll-die");
let finalScore1 = 0;
let finalScore2 = 0;
let dieRemove = document.querySelectorAll(".shape");
let dice1 = document.querySelector(".dice");
let chance1 = true;
let pl1 = document.querySelector(".pl1");
let pl2 = document.querySelector(".pl2");
let pr1 = document.querySelector(".pr1");
let pr2 = document.querySelector(".pr2");
let plA = document.querySelector(".plA");
let plB = document.querySelector(".plB");
let hold = document.querySelector(".hold");
let newGame = document.querySelector(".new-game");
let player = document.querySelectorAll(".player");
const winningCondition = (winner, winnerBg) => {
  winner.textContent = "WINS";
  rollDiceBtn.disabled = true;
  hold.disabled = true;
  newGame.classList.remove("hidden");
  winnerBg.classList.add("ply");
};
const resetGame = () => {
  finalScore1 = 0;
  finalScore2 = 0;
  pl1.textContent = 0;
  pl2.textContent = 0;
  pr1.textContent = 0;
  pr2.textContent = 0;
  plB.classList.remove("player-2");
  plA.classList.add("player-1");
  dice1.classList.add("hidden");
  rollDiceBtn.disabled = false;
  hold.disabled = false;
  newGame.classList.add("hidden");
  player.forEach((p) => {
    p.classList.remove("ply");
  });
  chance1 = true;
};
let sum = 0;
rollDiceBtn.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 6 + 1);
  let dice = document.querySelector(`.num${x}`);
  dice1.classList.remove("hidden");
  dieRemove.forEach((remove) => {
    remove.classList.add("hidden");
  });
  dice.classList.remove("hidden");
  if (chance1) {
    sum = sum + x;
    pr1.textContent = sum;
    if (x == 1) {
      sum = 0;
      pr1.textContent = sum;
      chance1 = false;
      plA.classList.remove("player-1");
      plB.classList.add("player-2");
    }
  } else {
    sum = sum + x;
    pr2.textContent = sum;
    if (x == 1) {
      sum = 0;
      pr2.textContent = sum;
      chance1 = true;
      plB.classList.remove("player-2");
      plA.classList.add("player-1");
    }
  }
});
hold.addEventListener("click", () => {
  if (chance1) {
    finalScore1 = finalScore1 + sum;
    pl1.textContent = finalScore1;
    sum = 0;
    pr1.textContent = sum;
    plA.classList.remove("player-1");
    plB.classList.add("player-2");
    chance1 = false;
  } else {
    finalScore2 = finalScore2 + sum;
    pl2.textContent = finalScore2;
    sum = 0;
    pr2.textContent = sum;
    plB.classList.remove("player-2");
    plA.classList.add("player-1");
    chance1 = true;
    // winningCondition(plB);
  }
  if (finalScore1 >= 100) {
    winningCondition(pl1, plA);
  }
  if (finalScore2 >= 100) {
    winningCondition(pl2, plB);
  }
});
newGame.addEventListener("click", resetGame);
