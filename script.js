// Questions are loaded from questions.js (global 'questions' array of ~300 items)

let score = 0;
let totalAnswered = 0;
const answeredState = {}; // Tracks which questions have been answered

document.addEventListener('DOMContentLoaded', function() {
    renderAllQuestions();
    updateScoreBar();
});

function renderAllQuestions() {
    const container = document.getElementById('quiz-container');
    let html = '';
    
    questions.forEach((q, idx) => {
        html += `
            <div class="question-card" id="q-${idx}">
                <div class="q-header">
                    <span class="q-num">#${q.id}</span>
                </div>
                <div class="q-text">${q.text}</div>
                <div class="q-options">
                    ${q.options.map((opt, oi) => `
                        <button class="opt-btn" onclick="selectOption(${idx}, ${oi})" data-q="${idx}" data-o="${oi}">
                            <span class="opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}
                        </button>
                    `).join('')}
                </div>
                <div class="q-actions">
                    <button class="check-btn" id="check-${idx}" onclick="checkAnswer(${idx})">
                        Check Answer
                    </button>
                </div>
                <div class="q-feedback" id="feedback-${idx}"></div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function selectOption(qIdx, oIdx) {
    if (answeredState[qIdx]) return; // Already answered — no changes
    
    // Deselect all options for this question
    const card = document.getElementById(`q-${qIdx}`);
    card.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
    
    // Select clicked option
    const btn = card.querySelector(`.opt-btn[data-q="${qIdx}"][data-o="${oIdx}"]`);
    btn.classList.add('selected');
}

function checkAnswer(qIdx) {
    if (answeredState[qIdx]) return; // Already answered
    
    const q = questions[qIdx];
    const card = document.getElementById(`q-${qIdx}`);
    const selected = card.querySelector('.opt-btn.selected');
    
    if (!selected) {
        // Highlight that they need to pick one
        card.querySelectorAll('.opt-btn').forEach(b => b.style.borderColor = '#e74c3c');
        setTimeout(() => {
            card.querySelectorAll('.opt-btn').forEach(b => b.style.borderColor = '');
        }, 600);
        return;
    }
    
    const selectedIdx = parseInt(selected.dataset.o);
    const isCorrect = selectedIdx === q.correctAnswer;
    
    // Mark all options
    card.querySelectorAll('.opt-btn').forEach((btn, bi) => {
        btn.disabled = true;
        if (bi === q.correctAnswer) {
            btn.classList.add('correct');
        } else if (bi === selectedIdx && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Update score
    totalAnswered++;
    if (isCorrect) score++;
    answeredState[qIdx] = true;
    
    // Show feedback
    const fb = document.getElementById(`feedback-${qIdx}`);
    fb.className = 'q-feedback show ' + (isCorrect ? 'fb-correct' : 'fb-incorrect');
    fb.innerHTML = `
        <div class="fb-header">
            ${isCorrect ? '✓ Correct!' : '✗ Incorrect'}
        </div>
        <div class="fb-explanation">${q.explanation}</div>
    `;
    
    // Scroll to show feedback
    fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide check button
    document.getElementById(`check-${qIdx}`).style.display = 'none';
    
    updateScoreBar();
}

function updateScoreBar() {
    const bar = document.getElementById('score-bar');
    if (totalAnswered === 0) {
        bar.innerHTML = `<span class="score-text">${questions.length} questions — pick an answer for each</span>`;
        return;
    }
    const pct = Math.round((score / totalAnswered) * 100);
    bar.innerHTML = `
        <span class="score-text">Score: <strong>${score}/${totalAnswered}</strong> (${pct}%)</span>
        <span class="score-label">— ${questions.length} total</span>
    `;
    bar.className = 'score-bar ' + (pct >= 80 ? 'score-passing' : '');
}
