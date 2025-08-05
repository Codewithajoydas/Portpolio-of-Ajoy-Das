let first = document.getElementById("1"); // paper
let second = document.getElementById("2"); // rock
let third = document.getElementById("3"); // scissors
let btn = document.getElementById("btn");
let data = [first, second, third];

let playerChoice = null;

// Loop through each option to attach click
data.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove active from all first
    data.forEach((el) => el.classList.remove("active"));

    // Add active to clicked one
    item.classList.add("active");

    // Set player's choice
    playerChoice = index + 1;
  });
});

btn.addEventListener("click", () => {
  if (playerChoice === null) {
    alert("Please choose one option first!");
    return;
  }

  let computerChoice = Math.floor(Math.random() * 3) + 1;

  // Simple result logic (optional)
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === 1 && computerChoice === 2) || // paper beats rock
    (playerChoice === 2 && computerChoice === 3) || // rock beats scissors
    (playerChoice === 3 && computerChoice === 1) // scissors beats paper
  ) {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }

  // Show result
  document.getElementById("result").innerText = result;
});
