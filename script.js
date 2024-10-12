let currentQuestionIndex = 0;
let playerName = '';

const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who wrote 'Hamlet'?", answer: "Shakespeare" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "Who invented the telephone?", answer: "Alexander Graham Bell" }
];

// Function to start the game
function startGame() {
    playerName = document.getElementById('player-name').value;
    if (!playerName) {
        alert("Please enter your name to start the game.");
        return;
    }

    document.getElementById('game-section').style.display = 'block';
    document.getElementById('player-name').style.display = 'none';
    document.querySelector('button[onclick="startGame()"]').style.display = 'none';  // Hide the start button
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    document.getElementById('answer').value = '';  // Clear the previous answer
    document.getElementById('result').innerText = '';  // Clear previous result
}

// Handle player's answer
function submitAnswer() {
    const playerAnswer = document.getElementById('answer').value.trim();
    const currentQuestion = questions[currentQuestionIndex].answer;

    if (playerAnswer.toLowerCase() === currentQuestion.toLowerCase()) {
        document.getElementById('result').innerText = "Correct! Moving to the next question...";

        setTimeout(() => {
            moveToNextQuestion();
        }, 1500);  // Wait 1.5 seconds before moving to the next question
    } else {
        document.getElementById('result').innerText = "Wrong answer. Try again!";
    }
}

// Function to move to the next question or end the game
function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // All questions answered, show the winner message
        document.getElementById('question').innerText = "Congratulations, you've completed the game!";
        document.getElementById('result').innerText = "";
        document.getElementById('game-section').style.display = 'none';  // Hide the input section
        showWinnerOnMainScreen();  // Show on main screen
    }
}

// Function to show the winner message on the main screen (computer screen)
function showWinnerOnMainScreen() {
    const winnerMessage = document.getElementById('winner-message');
    winnerMessage.innerText = `Congratulations ${playerName}! You have completed all the questions successfully!`;
}
