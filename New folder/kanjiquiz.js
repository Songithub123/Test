// Add your JavaScript code here
const kanji = {
    "一": "one",
    "二": "two",
    "三": "three",
    "四": "four",
    "五": "five",
    "六": "six",
    "七": "seven",
    "八": "eight",
    "九": "nine",
    "十": "ten",
};

const startQuiz = () => {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    let score = 0;
    let currentQuestionIndex = 0;

    const nextQuestion = () => {
        if (currentQuestionIndex >= 10) {
            const result = document.createElement("p");
            result.innerText = `Your score: ${score}/10`;
            quizContainer.appendChild(result);

            const homeButton = document.createElement("button");
            homeButton.innerText = "Homepage";
            homeButton.addEventListener("click", () => {
                window.location.reload();
            });
            quizContainer.appendChild(homeButton);
            return;
        }

        const question = document.createElement("div");
        question.classList.add("question");

        const kanjiKeys = Object.keys(kanji);
        const randomIndex = Math.floor(Math.random() * kanjiKeys.length);
        const randomKanji = kanjiKeys[randomIndex];
        const correctAnswer = kanji[randomKanji];

        question.innerHTML = `<p>${randomKanji}: </p>`;

        const answers = [correctAnswer];
        while (answers.length < 4) {
            const randomAnswerIndex = Math.floor(Math.random() * kanjiKeys.length);
            const randomAnswer = kanji[kanjiKeys[randomAnswerIndex]];
            if (!answers.includes(randomAnswer)) {
                answers.push(randomAnswer);
            }
        }

        answers.sort(() => Math.random() - 0.5);

        for (let j = 0; j < answers.length; j++) {
            const answer = document.createElement("button");
            answer.innerText = answers[j];
            answer.addEventListener("click", () => {
                if (answer.innerText === correctAnswer) {
                    answer.style.backgroundColor = "green";
                    score++;
                } else {
                    answer.style.backgroundColor = "red";
                }
                currentQuestionIndex++;
                setTimeout(nextQuestion, 1000);
            });
            question.appendChild(answer);
        }

        quizContainer.innerHTML = "";
        quizContainer.appendChild(question);
    };

    nextQuestion();
};

document.getElementById("start-quiz").addEventListener("click", startQuiz);
