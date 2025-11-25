    const container = document.createElement('div');
    const questionInput = document.createElement('input');
    const magicBall = document.createElement('div');
    const answerText = document.createElement('p');

    container.className = 'container';
    questionInput.id = 'questionInput';
    questionInput.type = 'text';
    magicBall.id = 'magicBall';
    answerText.id = 'answerText';
    magicBall.appendChild(answerText);
    container.appendChild(questionInput);
    container.appendChild(magicBall);
    document.body.appendChild(container);
    const answers = [
        "Так", "Ні", "Можливо", "Безумовно", "Навряд чи",
        "Спитай пізніше", "Зірки кажуть так", "Дуже сумнівно",
        "Сконцентруйся і спитай знову", "Я так не думаю"
    ];
    const getAnswer = () => {
        if (questionInput.value.trim() === '') {
            answerText.style.opacity = '1';
            answerText.style.color = '#470606ff';
            answerText.textContent = 'Спочатку постав питання';
            shakeBall();
            return;
        }
        answerText.style.opacity = '0';
        shakeBall();
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * answers.length);
            answerText.style.color = 'white';
            answerText.textContent = answers[randomIndex];
            answerText.style.opacity = '1';
        }, 600);
    };
    const shakeBall = () => {
        magicBall.classList.add('shake');
        setTimeout(() => {
            magicBall.classList.remove('shake');
        }, 200);
    };
    magicBall.addEventListener('click', getAnswer);
