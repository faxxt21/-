const userScoreSpan = document.getElementById('userScore');
const computerScoreSpan = document.getElementById('computerScore');
const userNumDiv = document.getElementById('userNumber');
const computerNumDiv = document.getElementById('computerNumber');
const resultText = document.getElementById('statusMessage');

let userScore = 0;
let computerScore = 0;

let userName = prompt("Введіть ваше ім'я:") || "Гравець";
document.getElementById('userName').innerText = userName;
document.getElementById('generateBtn').addEventListener('click', function() {
    let userNum = Math.floor(Math.random() * 100) + 1;
    let computerNum = Math.floor(Math.random() * 100) + 1;

    userNumDiv.innerText = userNum;
    computerNumDiv.innerText = computerNum;

    if (userNum > computerNum) {
        userScore++;
        resultText.innerText = "Ви виграли цей раунд!";
        resultText.style.color = "green";
    } else if (computerNum > userNum) {
        computerScore++;
        resultText.innerText = "Комп'ютер виграв цей раунд!";
        resultText.style.color = "red";
    } else {
        resultText.innerText = "Нічия!";
        resultText.style.color = "orange";
    }

    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;

    setTimeout(() => {
        if (userScore === 3) {
            alert(`Перемога! ${userName} виграв з рахунком 3:${computerScore}`);
            resetGame();
        } else if (computerScore === 3) {
            alert(`Програш! Комп'ютер виграв з рахунком 3:${userScore}`);
            resetGame();
        }
    }, 100);
});
function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.innerText = 0;
    computerScoreSpan.innerText = 0;
    userNumDiv.innerText = "?";
    computerNumDiv.innerText = "?";
    resultText.innerText = "Почніть гру!";
}