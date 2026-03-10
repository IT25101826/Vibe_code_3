// GPA calculator logic
function calculateGPA() {
    const inputs = document.querySelectorAll('#gpa-form input');
    let totalPoints = 0;
    let totalCredits = 0;

    inputs.forEach(input => {
        const grade = parseFloat(input.value);
        if (!isNaN(grade)) {
            totalPoints += grade;
            totalCredits++;
        }
    });

    const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.getElementById('gpa-result').textContent = `GPA: ${gpa}`;
}

// Study timer logic
let timer;
let seconds = 0;

function updateTimer() {
    const display = document.getElementById('timer-display');
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    updateTimer();
}

document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    document.getElementById('gpa-form').addEventListener('input', calculateGPA);
    document.getElementById('start-btn').addEventListener('click', startTimer);
    document.getElementById('stop-btn').addEventListener('click', stopTimer);
    document.getElementById('reset-btn').addEventListener('click', resetTimer);
});
