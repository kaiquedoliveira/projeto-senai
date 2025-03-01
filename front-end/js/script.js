document.addEventListener("DOMContentLoaded", () => {
    let questions = [
        { question: "Quanto é 2 + 2?", options: ["1", "2", "3", "4"], correct: 3 },
        { question: "Quem descobriu o Brasil?", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Dom Pedro I", "Vasco da Gama"], correct: 0 },
        { question: "Qual é a fórmula da água?", options: ["H2O", "CO2", "O2", "NaCl"], correct: 0 }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion() {
        let questionData = questions[currentQuestionIndex];
        document.getElementById("question-text").innerText = questionData.question;
        let optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = "";

        questionData.options.forEach((option, index) => {
            let button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        if (selectedIndex === questions[currentQuestionIndex].correct) {
            score++;
        }
        nextQuestion();
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById("question-container").classList.add("hidden");
        document.getElementById("result-container").classList.remove("hidden");
        document.getElementById("result-text").innerText = `Você acertou ${score} de ${questions.length} questões.`;
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById("result-container").classList.add("hidden");
        document.getElementById("question-container").classList.remove("hidden");
        showQuestion();
    }

    showQuestion();
});
