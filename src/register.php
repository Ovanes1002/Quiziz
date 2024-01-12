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
                <div class="playerName">
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
					<label id="playerName" for="name">
						Имя: 
					</label>
                </div>

				<div class="playerEmail">
					<input 
						type="text" 
						id="email" 
						name="email"
						autocomplete="off" 
						required 
						onblur="checkInput(this)"
					/>
					<label id="playerEmail"  for="email">
						Эл. почта:
					</label> 
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
					<label id="playerPassword" for="password">
						Пароль: 
					</label>
				</div>

				<div class="confirmPlayerPassword">
					<input 
						type="password" 
						id="confirmPassword" 
						autocomplete="off" 
						required 
						minlength="8" 
						maxlength="20" 
						onblur="checkInput(this)"
					/>
					<label id="confirmPlayerPassword" for="confirmPassword">
						Подтвердите пароль: 
					</label>
				</div>
              </div>
              <button class="inputButton">СОХРАНИТЬ</button>
              <div>
			  	<p>Уже есть аккаунт? <a class="inputLink" href="./index.php">Войти</a></p>
			  </div>
              <!-- <input type="submit" value="Сохранить" class="submit" /> -->
          </form>
        </div>

      </div>
    </div>
  </body>
  <script defer src="js/startPage.js"></script>
</html>