// Sample questions for FAA Part 107 test
// In a real implementation, you would have around 300 questions
const questions = [
    {
        id: 1,
        text: "What is the maximum altitude allowed for a small unmanned aircraft operating under Part 107?",
        options: [
            "400 feet above ground level",
            "500 feet above ground level", 
            "1,200 feet above ground level",
            "18,000 feet above ground level"
        ],
        correctAnswer: 0,
        explanation: "Under Part 107, the maximum altitude is 400 feet above ground level (AGL) unless flying within 400 feet of a structure, then you can fly up to 400 feet above the structure's immediate upper limit."
    },
    {
        id: 2,
        text: "What minimum visibility is required for operations under Part 107?",
        options: [
            "1 statute mile",
            "2 statute miles",
            "3 statute miles",
            "5 statute miles"
        ],
        correctAnswer: 2,
        explanation: "Part 107 requires a minimum visibility of 3 statute miles from the control station for small unmanned aircraft operations."
    },
    {
        id: 3,
        text: "When operating a small unmanned aircraft, the remote pilot-in-command must yield the right of way to all other aircraft, vehicles, vessels, etc.:",
        options: [
            "Only when flying over people",
            "Only when flying at night",
            "Always",
            "Only in controlled airspace"
        ],
        correctAnswer: 2,
        explanation: "The remote pilot-in-command must always yield the right of way to all other aircraft, vehicles, vessels, etc. This is a fundamental safety rule under Part 107."
    },
    {
        id: 4,
        text: "What is required to operate a small unmanned aircraft from a moving vehicle?",
        options: [
            "Nothing special is required",
            "A waiver from the FAA",
            "Only in sparsely populated areas",
            "Only during daylight hours"
        ],
        correctAnswer: 1,
        explanation: "Operating a small unmanned aircraft from a moving vehicle requires a waiver from the FAA, as it is not allowed under standard Part 107 rules."
    },
    {
        id: 5,
        text: "What is the maximum groundspeed allowed for a small unmanned aircraft under Part 107?",
        options: [
            "25 knots",
            "50 knots",
            "87 knots",
            "100 knots"
        ],
        correctAnswer: 2,
        explanation: "The maximum groundspeed allowed for a small unmanned aircraft under Part 107 is 87 knots (100 mph)."
    },
    {
        id: 6,
        text: "How often must a remote pilot complete recurrent training to maintain their Part 107 certification?",
        options: [
            "Every 6 months",
            "Every 12 months",
            "Every 24 months",
            "Every 48 months"
        ],
        correctAnswer: 2,
        explanation: "Remote pilots must complete recurrent training every 24 months to maintain their Part 107 certification."
    },
    {
        id: 7,
        text: "What documentation must be available for inspection when operating a small unmanned aircraft under Part 107?",
        options: [
            "Only the remote pilot certificate",
            "Remote pilot certificate and aircraft registration",
            "Remote pilot certificate, aircraft registration, and waivers (if applicable)",
            "No documentation is required"
        ],
        correctAnswer: 2,
        explanation: "The remote pilot must have their remote pilot certificate, aircraft registration, and any applicable waivers available for inspection by the FAA, NTSB, or any law enforcement officer."
    },
    {
        id: 8,
        text: "What is the minimum age requirement to obtain a remote pilot certificate under Part 107?",
        options: [
            "14 years old",
            "16 years old",
            "18 years old",
            "21 years old"
        ],
        correctAnswer: 1,
        explanation: "The minimum age to obtain a remote pilot certificate under Part 107 is 16 years old."
    },
    {
        id: 9,
        text: "When is it permissible to operate a small unmanned aircraft at night under Part 107?",
        options: [
            "Never - night operations are prohibited",
            "Only with special FAA authorization",
            "Always permitted",
            "Only during civil twilight with appropriate lighting"
        ],
        correctAnswer: 3,
        explanation: "Night operations are permitted during civil twilight (30 minutes before official sunrise to 30 minutes after official sunset) with appropriate anti-collision lighting visible for at least 3 statute miles."
    },
    {
        id: 10,
        text: "What is the maximum weight allowed for a small unmanned aircraft under Part 107?",
        options: [
            "25 pounds",
            "45 pounds",
            "55 pounds",
            "75 pounds"
        ],
        correctAnswer: 2,
        explanation: "The maximum takeoff weight allowed for a small unmanned aircraft under Part 107 is 55 pounds (25 kg)."
    }
];

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