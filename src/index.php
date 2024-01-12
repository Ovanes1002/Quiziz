<?php include_once "header.php"; ?>
  <body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
     <div class="startPage">
        <!-- <h1>Проверьте свои знания с Quiziz</h1>
        <p>Испытайте свою сноровку и повеселитесь в нашей викторине!</p> -->
        <div class="nameInput">
          <form action="" method="">
          <h2>Вход</h2>

            <div class="input-group">
              <div class="playerName">
                <input 
                  type="text" 
                  id="name" 
                  autocomplete="off" 
                  required 
                  minlength="1" 
                  maxlength="70" 
                  onblur="checkInput(this)"
                />
                <label for="name"> Ваше имя: </label>
              </div>
              
				<div class="playerPassword">
					<input 
					type="password" 
					id="password" 
					autocomplete="off" 
					required 
					minlength="8" 
					maxlength="20" 
					onblur="checkInput(this)"
					/>
					<label for="password"> Ваш пароль: </label>
				</div>


            </div>
            <button class="inputButton">ВОЙТИ</button>
            <div>
				<p>Ещё нет аккаунта? <a class="registerLink" href="./register.php">Регистрация</a></p>
            </div>
            <!-- <input type="submit" value="Сохранить" class="submit" /> -->
          </form>
        </div>

      </div>
    </div>
  </body>
  <script defer src="js/startPage.js"></script>
</html>

<!-- + 1.Добавить модальное окно, при количестве символов меньше 2 в вводе имени
  + 2.Добавить добавление нового результата в таблицу и последующее сохранение этого результата с помощью localStorage
  + 3.Добавить прогрессбар
  + 4.Добавить в таблице сортировку результатов сверху вниз от большего к меньшему
  + 5.Добавить разную ценность вопросов -->
