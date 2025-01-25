const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const gussingNumber = form.querySelector("#gussingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

let totalAttempt = 5;
let attempt = 0;
let totalWon = 0;
let totalLost = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  attempt++;

  if (attempt == 5) {
    gussingNumber.disabled = true;
    checkButton.disabled = true;
  }
  if (attempt < 6) {
    checkResult(gussingNumber.value);
    remainingAttempts.innerHTML = `remaing attempt : ${totalAttempt - attempt}`;
  }
  gussingNumber.value = " ";
});

function checkResult(gussingNumber) {
  const randomNumber = getRandomNumber(5);

  if (gussingNumber == randomNumber) {
    resultText.innerHTML = `You have won`;
    totalWon++;
  } else {
    resultText.innerHTML = `You have lost; Your random number was : ${randomNumber}`;
    totalLost++;
  }
  lostWonMessage.innerHTML = `Won : ${totalWon}, lost: ${totalLost}`;
  cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}
