const // endButton = document.querySelector(".endButton"),
  main = document.querySelector(".card"),
  questionElement = document.querySelector(".question"),
  answerButtons = document.querySelector(".answer-buttons"),
  // buttons             = document.querySelectorAll(".button"),
  count = document.querySelector(".questionNumber"),
  points = document.querySelector(".points"),
  progress = document.getElementById("progressBar"),
  max = 100,
  firstWriteAnswer = document.querySelector(".firstWriteAnswer"),
  secondWriteAnswer = document.querySelector(".secondWriteAnswer"),
  thirdWriteAnswer = document.querySelector(".thirdWriteAnswer"),
  audioSport = document.querySelector(".audioSport"),
  audioMusic = document.querySelector(".audioMusic"),
  audioArt = document.querySelector(".audioArt"),
  audioHistory = document.querySelector(".audioHistory"),
  currentIndex = document.querySelector(".currentIndex"),
  currentTopic = document.querySelector(".currentTopic");
(currentQuestionIndex = currentIndex.innerText), (lastClickedTopic = currentTopic.innerText);

let i = 0,
  current = 0;
setQuestion();

// Установка вопроса
function setQuestion() {
  showQuestion(quizList[currentQuestionIndex]);
}

//  Показ вопроса с выбором ответов
function showQuestion(question) {
  count.innerText = `${(+currentQuestionIndex % 10) + 1}` + " / 10";
  // console.log(currentQuestionIndex);
  // console.log(lastClickedTopic);
  questionElement.innerText = question.question; // установка вопроса карточки

  if (+currentQuestionIndex % 10 < 7) {
    question.answers.forEach((answer) => {
      if (+currentQuestionIndex % 10 < 4) {
        // все текстовые вопросы на выбор 1 из 4
        buttons[i].innerText = answer.text;
      } else if (+currentQuestionIndex % 10 < 7) {
        points.innerText = `2 балла`;
        buttons[i].innerHTML = `<img src="${answer.text}" alt="фото викторины" />`;
      }

      if (answer.correct) {
        buttons[i].classList.add("true");
        // Замечание: по сути данное добавление класса нужно только для отслеживания правильного ответа,
        // чтоб вести счёт игрока, стили в данном случае применятся не будут
        // Лучше использовать button.dataset.correct = answer.correct
      } else {
        buttons[i].classList.remove("true");
      }

      i++;
    });
  } else if (+currentQuestionIndex % 10 < 9) {
    points.innerText = `3 балла`;
    buttons.forEach((button) => {
      button.classList.add("hide");
    });
    // main.style.height = "220px";
    answerButtons.style.margin = "0";
    // answerButtons.style.marginBottom = "-20px";

    if (+currentQuestionIndex % 10 == 7) {
      firstWriteAnswer.classList.remove("hide");
      secondWriteAnswer.classList.add("hide");
      thirdWriteAnswer.classList.add("hide");
    } else if (+currentQuestionIndex % 10 == 8) {
      firstWriteAnswer.classList.add("hide");
      secondWriteAnswer.classList.remove("hide");
      thirdWriteAnswer.classList.add("hide");
    }
    answerButtons.style.alignItems = "center";
  } else if (+currentQuestionIndex % 10 == 9) {
    points.innerText = `4 балла`;
    firstWriteAnswer.classList.add("hide");
    secondWriteAnswer.classList.add("hide");
    if (lastClickedTopic == "спорт") audioSport.classList.remove("hide");
    else if (lastClickedTopic == "музыка") audioMusic.classList.remove("hide");
    else if (lastClickedTopic == "искусство") audioArt.classList.remove("hide");
    else if (lastClickedTopic == "история") audioHistory.classList.remove("hide");
    thirdWriteAnswer.classList.remove("hide");
    answerButtons.style.flexDirection = "column";
  }

  i = 0;
}

function updateProgress(value) {
  current += value;
  if (current >= max) {
    current = max;
  }
  progress.style.width = `${(current / max) * 100}%`;
}
