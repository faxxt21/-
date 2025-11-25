const button = document.getElementById('button');
const attemptsDisplay = document.getElementById('attempts');
const userDisplay = document.getElementById('username');
const messageDisplay = document.getElementById('result_message');
const images = ['🍎', '🍐', '🍋', '🍒', '🍑', '🍇'];
const maxAttempts = 3;
let currentAttempt = 0;
let userName = "User";
window.onload = function() {
    let inputName = prompt("Введіть ваше ім'я:", "Гравець");
    if (inputName && inputName.trim() !== "") {
        userName = inputName.trim();
    }
    userDisplay.textContent = userName;
    updateStatus();
};
function updateStatus() {
    attemptsDisplay.textContent = `Спроба ${currentAttempt} з ${maxAttempts}`;
}
button.addEventListener('click', function() {
    if (currentAttempt >= maxAttempts) return;
    currentAttempt++;
    updateStatus();
    messageDisplay.textContent = "";
    let board = [[], [], []]; 
    for (let column = 0; column < 3; column++) {
        let columnImages = getUniqueRandomImages(3);
        board[column] = columnImages;
        const columnDiv = document.getElementById(`column${column+1}`);
        columnDiv.innerHTML = '';
        columnImages.forEach(img => {
            const div = document.createElement('div');
            div.className = 'item';
            div.textContent = img;
            columnDiv.appendChild(div);
        });
    }
    if (checkWin(board)) {
        messageDisplay.textContent = `${userName} Ви виграли!`;
        messageDisplay.className = "message win";
        button.disabled = true;
    } else {
        if (currentAttempt >= maxAttempts) {
            messageDisplay.textContent = "Спроби вичерпано. Ви програли";
            messageDisplay.className = "message lose";
            button.disabled = true;
        }
    }
});
function getUniqueRandomImages(count) {
    let pool = [...images];
    pool.sort(() => Math.random() - 0.5);
    return pool.slice(0, count);
}
function checkWin(board) {
    for (let row = 0; row < 3; row++) {
        let symbol1 = board[0][row];
        let symbol2 = board[1][row];
        let symbol3 = board[2][row];
        if (symbol1 === symbol2 && symbol2 === symbol3) {
            return true;
        }
    }
    return false;
}