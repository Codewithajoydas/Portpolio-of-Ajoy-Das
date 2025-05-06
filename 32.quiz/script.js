let totalMarks = 0;
let totalQuestions = 0;
const totalLimit = 10;
let currentCorrectAnswer = "";

const quiz = document.getElementById("quiz");
const ans = document.getElementById("ans");
const submitBtn = document.getElementById("submit");
const resultBox = document.getElementById("result");

function loadQuestion() {
  fetch("https://opentdb.com/api.php?amount=1&category=17&difficulty=easy")
    .then((res) => res.json())
    .then((data) => {
      const questionData = data.results[0];

      currentCorrectAnswer = questionData.correct_answer;
      quiz.innerHTML = questionData.question;
      ans.innerHTML = "";

      const allAnswers = [
        ...questionData.incorrect_answers,
        questionData.correct_answer,
      ];
      allAnswers.sort(() => Math.random() - 0.5);

      allAnswers.forEach((answer) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = answer;

        label.appendChild(input);
        label.append(" " + answer);
        ans.appendChild(label);
        ans.appendChild(document.createElement("br"));
      });
    })
    .catch((err) => {
      quiz.innerHTML = `<p>Failed to load question. Try again later.</p>`;
      ans.innerHTML = ""; // clear previous options
      submitBtn.style.display = "none"; // hide submit button

      function retry() {
        submitBtn.style.display = "inline-block";
        loadQuestion();
      }
    });
}

// Separate event handler — only one assignment
submitBtn.onclick = () => {
  const selected = document.querySelector("input[name='answer']:checked");
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  const userAnswer = selected.value;
  if (userAnswer === currentCorrectAnswer) {
    totalMarks++;
  }

  totalQuestions++;

  if (totalQuestions < totalLimit) {
    loadQuestion(); // Load next question
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultBox.style.display = "block";
  resultBox.innerHTML = `<h2>Quiz Completed</h2>
    <p>You scored ${totalMarks} out of ${totalLimit}</p>`;
}

loadQuestion(); // Initial call
