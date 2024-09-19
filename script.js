const questions = [
  {
    question: 'Was the Great Wall of China built before 200 BC?',
    answer: 'yes',
  },
  { question: 'Did the Titanic sink on its maiden voyage?', answer: 'yes' },
  { question: 'Was Albert Einstein a Nobel Prize winner?', answer: 'yes' },
  { question: 'Is DNA double stranded?', answer: 'yes' },
  { question: 'Did the Roman Empire fall in the 5th century?', answer: 'yes' },
  {
    question: 'Was the first Olympic Games held in ancient Greece?',
    answer: 'yes',
  },
  {
    question: "Is the Earth's largest ocean the Pacific Ocean?",
    answer: 'yes',
  },
  { question: 'Do aliens exist?', answer: 'no' },
  { question: 'Can you sneeze with your eyes open?', answer: 'no' },
  { question: 'Can cats see in complete darkness?', answer: 'no' },
  { question: 'Is coffee more important than sleep?', answer: 'no' },
  { question: 'Is Paris the capital of Germany?', answer: 'no' },
  { question: 'Did Michael Jackson win a Grammy Award?', answer: 'yes' },
  { question: 'Is Pluto still considered a planet?', answer: 'no' },
  { question: 'Do humans have four chambers in their hearts?', answer: 'yes' },
  {
    question: 'Can humans breathe underwater without equipment?',
    answer: 'no',
  },
  { question: 'Does the Nile River flow through Egypt?', answer: 'yes' },
  { question: 'Can humans live without their appendix?', answer: 'yes' },
  { question: 'Is chocolate a vegetable?', answer: 'no' },
  { question: 'Is Beyoncé a Queen Bey?', answer: 'yes' },
];

let questionCount = 0; // Number of questions asked
let currentScore = 0; // Total score

// Function to display the current question
function displayQuestion() {
  if (questionCount < questions.length) {
    document.getElementById('question').textContent =
      questions[questionCount].question;
    document.getElementById('feedback').textContent = '';
    document.getElementById('questionCount').textContent = questionCount + 1;
    clearButtonStyles();
  } else {
    endGame();
  }
}

// Function to handle user choice
function makeChoice(answer) {
  const correctAnswer = questions[questionCount].answer;

  // Update score based on the user's answer
  if (answer === correctAnswer) {
    currentScore += 1; // Correct answer
    document.getElementById('feedback').textContent = 'Correct! Good job!';
  } else {
    currentScore += 0; // Incorrect answer
    document.getElementById('feedback').textContent =
      'Wrong answer! The correct answer was: ' + correctAnswer + '';
  }

  questionCount++; // Increment the question count
  document.getElementById('points').textContent = currentScore.toFixed(1); // Update score display
  clearButtonStyles();
  highlightButton(answer);

  // Display the next question after a short delay
  setTimeout(displayQuestion, 2000);
}

// Function to highlight the selected button
function highlightButton(choice) {
  const button =
    choice === 'yes'
      ? document.getElementById('yesButton')
      : document.getElementById('noButton');
  button.classList.add('active');
}

// Function to clear button styles
function clearButtonStyles() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => button.classList.remove('active'));
}

// Function to end the game
function endGame() {
  document.getElementById('question').textContent =
    'Game Over! Your score is: ' + currentScore.toFixed(1);
  document.getElementById('feedback').textContent = '';
  document.getElementById('progress').style.display = 'none'; // Hide progress info
}

// Initial call to display the first question
displayQuestion();
