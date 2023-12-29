<?php include_once "header.php"; ?>
  <body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
      <div class="startPage">
        <!-- <h1>Проверьте свои знания с Quiziz</h1>
        <p>Испытайте свою сноровку и повеселитесь в нашей викторине!</p> -->
        <div class="nameInput">
          <form class="registerForm" action="" method="">
            <h2>Регистрация</h2>
              <div class="input-group">
                <label id="playerName" for="name">
                  Ваше имя: 
                </label>
                <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      autocomplete="off" 
                      required 
                      minlength="1" 
                      maxlength="70" 
                      onblur="checkInput(this)"
                  />
                <label for="email">
                  Электронная почта:
                </label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    autocomplete="off" 
                    required 
                    onblur="checkInput(this)"
                />     
                <label id="playerPassword" for="password">
                  Ваш пароль: 
                </label>
                <input 
                      type="password" 
                      id="password" 
                      autocomplete="off" 
                      required 
                      minlength="8" 
                      maxlength="20" 
                      onblur="checkInput(this)"
                  />
              </div>
              <button class="inputButton">СОХРАНИТЬ</button>
              <a href="./index.php">Назад</a>
              <!-- <input type="submit" value="Сохранить" class="submit" /> -->
          </form>
        </div>

      </div>
    </div>
  </body>
  <script defer src="js/startPage.js"></script>
</html>