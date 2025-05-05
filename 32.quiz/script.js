fetch("https://opentdb.com/api.php?amount=1&category=17&difficulty=easy")
  .then((res) => res.json())
  .then((data) => {
    const questionData = data.results[0];
    const quiz = document.getElementById("quiz");
    const ans = document.getElementById("ans");

    // Set question text
    quiz.innerHTML = questionData.question;
    ans.innerHTML = ""; // Clear previous answers

    // Merge correct and incorrect answers
    const allAnswers = [
      ...questionData.incorrect_answers,
      questionData.correct_answer,
    ];
    allAnswers.sort(() => Math.random() - 0.5); // Shuffle answers

    const inputType = questionData.type === "multiple" ? "radio" : "radio";

    allAnswers.forEach((answer, index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");

      input.type = inputType;
      input.name = "answer";
      input.value = answer;

      label.appendChild(input);
      label.append(" " + answer);
      ans.appendChild(label);
      ans.appendChild(document.createElement("br"));
    });

    document.getElementById("submit").onclick = () => {
      const selected = document.querySelector("input[name='answer']:checked");
      if (!selected) {
        alert("Please select an answer.");
        return;
      }

      const userAnswer = selected.value;
      const isCorrect = userAnswer === questionData.correct_answer;
      alert(
        isCorrect
          ? "✅ Correct!"
          : `❌ Wrong. Correct answer: ${questionData.correct_answer}`
      );
    };
  })
  .catch((err) => {
    document.body.innerHTML = `<h1>The API is Not Working: ${err}</h1>`;
  });
