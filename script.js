// Questions are loaded from questions.js (global 'questions' array of ~300 items)

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
    updateProgress();
});

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestionIndex];
    
    quizContainer.innerHTML = `
        <div class="question-number">Question ${question.id}</div>
        <div class="question-text">${question.text}</div>
        <div class="options">
            ${question.options.map((option, index) => `
                <button class="option-button" onclick="selectAnswer(${index})">
                    ${option}
                </button>
            `).join('')}
        </div>
        <button id="submit-button" onclick="submitAnswer()" ${answered ? 'disabled' : ''}>
            Submit Answer
        </button>
        <button id="next-button" onclick="nextQuestion()" ${!answered ? 'disabled' : ''} style="display: none;">
            Next Question
        </button>
        <div class="explanation" id="explanation">
            <h3>Explanation:</h3>
            <p id="explanation-text"></p>
        </div>
    `;
}

function selectAnswer(index) {
    // Remove selection from all buttons
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    
    // Add selection to clicked button
    event.target.classList.add('selected');
    
    // Enable submit button
    document.getElementById('submit-button').disabled = false;
}

function submitAnswer() {
    if (answered) return;
    
    const selectedButton = document.querySelector('.option-button.selected');
    if (!selectedButton) {
        alert('Please select an answer before submitting.');
        return;
    }
    
    const question = questions[currentQuestionIndex];
    const selectedIndex = Array.from(selectedButton.parentNode.children).indexOf(selectedButton);
    
    // Check if answer is correct
    const isCorrect = selectedIndex === question.correctAnswer;
    
    // Update button styles
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.correctAnswer) {
            button.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            button.classList.add('incorrect');
        }
    });
    
    // Show explanation
    const explanationDiv = document.getElementById('explanation');
    const explanationText = document.getElementById('explanation-text');
    explanationText.textContent = question.explanation;
    explanationDiv.classList.add('show');
    
    // Update score if correct
    if (isCorrect) {
        score++;
    }
    
    // Update button states
    document.getElementById('submit-button').disabled = true;
    document.getElementById('next-button').disabled = false;
    document.getElementById('next-button').style.display = 'block';
    
    answered = true;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    answered = false;
    loadQuestion();
    updateProgress();
    
    // Reset button states
    document.getElementById('submit-button').disabled = false;
    document.getElementById('next-button').disabled = true;
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('explanation').classList.remove('show');
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progressPercent + '%';
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const percentage = Math.round((score / questions.length) * 100);
    
    quizContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You scored ${score} out of ${questions.length} (${percentage}%)</p>
        <p>${percentage >= 80 ? 'Great job! You seem ready for the actual test.' : 'Keep studying! You\'ll need at least 80% to pass the actual Part 107 test.'}</p>
        <button onclick="resetQuiz()" class="option-button" style="margin-top: 20px; width: auto; padding: 10px 20px;">
            Try Again
        </button>
    `;
    
    // Hide progress bar and next button
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('submit-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    
    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('submit-button').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
    
    loadQuestion();
    updateProgress();
}