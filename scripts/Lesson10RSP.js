let counter = JSON.parse(localStorage.getItem("counter")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

const choices = ["rock", "paper", "scissors"];

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function showScore() {
  document.querySelector(
    ".counterScore"
  ).innerHTML = `Wins: ${counter.wins}, Losses: ${counter.loses}, Ties: ${counter.ties}`;
}

function RSP(player, computer) {
  let result;
  if (player == computer) {
    result = "It's a tie!";
    counter.ties++;
  } else if (
    (player == "rock" && computer == "paper") ||
    (player == "paper" && computer == "scissors") ||
    (player == "scissors" && computer == "rock")
  ) {
    result = `You lose.`;
    counter.loses++;
  } else {
    result = `You win.`;
    counter.wins++;
  }

  localStorage.setItem("counter", JSON.stringify(counter));

  document.querySelector(".winLose").innerHTML = result;

  document.querySelector(
    ".bothChoices"
  ).innerHTML = `You chose <img src="images/${player}-emoji.png" class="css-moveset"/> while Computer chose <img src="images/${computer}-emoji.png" class="css-moveset"/>`;

  showScore();
}
//#endregion
