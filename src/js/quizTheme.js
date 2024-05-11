const inputFileQuizIcon = document.getElementById("quizIcon"),
  labelFileQuizIcon = document.getElementById("playerQuizIcon"),
  quizName = document.getElementById("quizName"),
  preview = document.getElementById("preview"),
  startMakeQuiz = document.querySelector(".startMakeQuiz");

inputFileQuizIcon.addEventListener("change", function () {
  let fileName = "";
  if (this.files && this.files.length) {
    preview.src = window.URL.createObjectURL(this.files[0]);
    fileName = this.files[0].name;
  }
  if (fileName) {
    labelFileQuizIcon.innerHTML = fileName;
  } else {
    labelFileQuizIcon.innerHTML = "Обложка викторины";
  }
});

quizName.addEventListener("input", function (evt) {
  if (quizName.value.trim().length !== 0) {
    startMakeQuiz.classList.remove("hide");
  } else {
    startMakeQuiz.classList.add("hide");
  }
});
