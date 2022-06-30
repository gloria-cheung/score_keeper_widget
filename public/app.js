const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;

// helper functions
const updateScore = function(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
};
const reset = function(player, opponent) {
  isGameOver = false;
  player.score = 0;
  opponent.score = 0;
  player.display.textContent = player.score;
  opponent.display.textContent = opponent.score;
  player.display.classList.remove("has-text-success", "has-text-danger");
  opponent.display.classList.remove("has-text-success", "has-text-danger");
  player.button.disabled = false;
  opponent.button.disabled = false;
};

// event listeners
p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

winningScoreSelect.addEventListener("change", function() {
  winningScore = parseInt(this.value);
  reset(p1, p2);
});

resetButton.addEventListener("click", () => {
  reset(p1, p2);
});
