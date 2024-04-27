const startMakeQuiz = document.querySelector(".startMakeQuiz"),
  writeInput = document.querySelector(".writeInput");

writeInput.addEventListener("input", () => {
  if (writeInput.value.trim().length !== 0) {
    startMakeQuiz.classList.remove("hide");
  } else {
    startMakeQuiz.classList.add("hide");
  }
});
