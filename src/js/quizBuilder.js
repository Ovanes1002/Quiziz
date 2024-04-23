const startMakeQuiz = document.querySelector(".startMakeQuiz"),
  questionMakeButton = document.querySelector(".questionMakeButton"),
  questionNextButton = document.querySelector(".questionNextButton"),
  questionType = document.getElementById("questionType"),
  questionBlock = document.querySelector(".questionBlock");

questionMakeButton.addEventListener("click", () => {
  const selectedOption = questionType.options[questionType.selectedIndex].value;

  let htmlToAdd = "";

  if (selectedOption === "textAnswer") {
    htmlToAdd = `
                      <div class="firstAnswer">
                          <label class="radioLabel">
                              <input type="radio" class="radioInput" name="radioGroup">
                              <span class="radioSpan"></span>
                          </label>
                          <textarea name="firstTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
                      </div>
                      <div class="secondAnswer">
                          <label class="radioLabel">
                              <input type="radio" class="radioInput" name="radioGroup">
                              <span class="radioSpan"></span>
                          </label>
                          <textarea name="secondTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
                      </div>
                      <div class="thirdAnswer">
                          <label class="radioLabel">
                              <input type="radio" class="radioInput" name="radioGroup">
                              <span class="radioSpan"></span>
                          </label>
                          <textarea name="thirdTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
                      </div>
                      <div class="fourthAnswer">
                          <label class="radioLabel">
                              <input type="radio" class="radioInput" name="radioGroup">
                              <span class="radioSpan"></span>
                          </label>
                          <textarea name="fourthTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
                      </div>
                  `;
  } else if (selectedOption === "imageAnswer") {
    htmlToAdd = '<div class="imageAnswerBlock">Выбрать 1 изображение из 4</div>';
  } else if (selectedOption === "writeAnswer") {
    htmlToAdd = '<div class="writeAnswerBlock">Вписать ответ</div>';
  } else if (selectedOption === "writeAudioAnswer") {
    htmlToAdd = '<div class="writeAudioAnswerBlock">Вписать ответ по аудио</div>';
  }

  questionBlock.innerHTML = htmlToAdd;
});

startMakeQuiz.addEventListener("click", function (evt) {
  console.log("клик");
});

{
  /* <div class="quizQuestion">
                <label>
                    Вопрос:
                    <input type="text" class="writeInput" maxlength="200" autocomplete="off">
                </label>
            </div>
            <div class="quizDifficulty">
                <label for="questionDifficulty">Сложнось вопроса:</label>
                <select name="questionDifficulty" id="questionDifficulty" size="1">
                    <option value="1">1 балл</option>
                    <option value="2">2 балла</option>
                    <option value="3">3 балла</option>
                    <option value="4">4 балла</option>
                    <option value="5">5 баллов</option>
                </select>
            </div>
            <div class="quizType">
                <label for="questionType">Тип вопроса:</label>
                <select name="questionType" id="questionType" size="1">
                    <option value="textAnswer">Выбрать 1 текст-ответ из 4</option>
                    <option value="imageAnswer">Выбрать 1 изображение из 4</option>
                    <option value="writeAnswer">Вписать ответ</option>
                    <option value="writeAudioAnswer">Вписать ответ по аудио</option>
                </select>
            </div>

            <button type="button" class="button questionMakeButton">Создать</button>
            <div class="questionBlock">
                <div class="firstAnswer">
                    <label class="radioLabel">
                        <input type="radio" class="radioInput" name="radioGroup">
                        <span class="radioSpan"></span>
                    </label>
                    <textarea name="firstTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
                </div>
                <div class="secondAnswer">
                    <label class="radioLabel">
                        <input type="radio" class="radioInput" name="radioGroup">
                        <span class="radioSpan"></span>
                    </label>
                    <textarea name="secondTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
                </div>
                <div class="thirdAnswer">
                    <label class="radioLabel">
                        <input type="radio" class="radioInput" name="radioGroup">
                        <span class="radioSpan"></span>
                    </label>
                    <textarea name="thirdTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
                </div>
                <div class="fourthAnswer">
                    <label class="radioLabel">
                        <input type="radio" class="radioInput" name="radioGroup">
                        <span class="radioSpan"></span>
                    </label>
                    <textarea name="fourthTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
                </div>
            </div>
            <button type="button" class="button questionNextButton">Далее</button> */
}
