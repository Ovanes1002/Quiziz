<?php

require_once __DIR__ . '/helpers.php';

checkGuest();

// $_SESSION['validation'] = [];
?>

<?php include_once "head.php"; ?>
  <body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
      <div class="startPage">
        <!-- <h1>Проверьте свои знания с Quiziz</h1>
        <p>Испытайте свою сноровку и повеселитесь в нашей викторине!</p> -->
        <div class="nameInput">
          <form class="registerForm" action="/actions/register.php" method="post" enctype="multipart/form-data">
            <h2>Регистрация</h2>
              <div class="input-group">

                <div class="playerName">
					
					<label id="playerName" for="name">
						Имя: 
					</label>

					<input 
						type="text" 
						id="name" 
						name="name"
						class="inputStylized"
						autocomplete="off"
						placeholder="Иван"
						value="<?php echo getOldValue(key: 'name') ?>"
						<?php validationErrorAttr(fieldName: 'name') ?>
						minlength="1" 
						maxlength="70" 
					/>

					<!-- если ключ массива $_SESSION['validation']['name'] не пустой, то отображаем под инпутом с именем ошибку с текстом  -->
					<?php if(hasValidationError(fieldName: 'name')): ?>
						<small><?php validationErrorMessage(fieldName: 'name') ?></small>
					<?php endif; ?>
                </div>

				<div class="playerEmail">
					<label id="playerEmail"  for="email">
						Эл. почта:
					</label>

					<input 
						type="text" 
						id="email" 
						name="email"
						class="inputStylized"
						autocomplete="off"
						placeholder="example@gmail.com"
						value="<?php echo getOldValue(key: 'email') ?>"
						<?php validationErrorAttr(fieldName: 'email') ?>
						minlength="6" 
						maxlength="70" 
					/>

					<?php if(hasValidationError(fieldName: 'email')): ?>
						<small><?php validationErrorMessage(fieldName: 'email') ?></small>
					<?php endif; ?>
				</div>
				
				<div class="playerAvatar">

					<label id="playerAvatar" for="avatar">
						Изображение профиля
					</label>

					<input
						type="file"
						id="avatar"
						name="avatar"
						class="inputStylized"
						<?php echo validationErrorAttr('avatar'); ?>
					/>
						
					<?php if(hasValidationError('avatar')): ?>
						<small><?php echo validationErrorMessage('avatar'); ?></small>
					<?php endif; ?>
				</div>

				<div class="flexPassword">
					<div class="playerPassword">

						<label id="playerPassword" for="password">
							Пароль: 
						</label>

						<input 
							type="password" 
							id="password" 
							name="password"
							class="inputStylized"
							autocomplete="off" 
							placeholder="********"
							<?php validationErrorAttr(fieldName: 'password') ?>
							minlength="8" 
							maxlength="20" 
						/>


						<?php if(hasValidationError(fieldName: 'password')): ?>
							<small><?php validationErrorMessage(fieldName: 'password') ?></small>
						<?php endif; ?>
					</div>

					<div class="confirmPlayerPassword">

						<label id="confirmPlayerPassword" for="confirmPassword">
							Подтвердите: 
						</label>

						<input 
							type="password" 
							id="confirmPassword"
							name="confirmPassword"
							class="inputStylized"
							autocomplete="off" 
							placeholder="********"
							<?php validationErrorAttr(fieldName: 'confirmPassword') ?>
							minlength="8" 
							maxlength="20" 
						/>

						<?php if(hasValidationError(fieldName: 'confirmPassword')): ?>
							<small><?php validationErrorMessage(fieldName: 'confirmPassword') ?></small>
						<?php endif; ?>
					</div>
				</div>
              </div>
			  <fieldset>
					<label for="terms">
						<input
							type="checkbox"
							id="terms"
							name="terms"
						>
						Я принимаю все условия пользования
					</label>
				</fieldset>
              <button type="submit" id="submit" disabled class="inputButton">СОХРАНИТЬ</button>
              <div>
			  	<p>Уже есть аккаунт? <a class="inputLink" href="./index.php">Войти</a></p>
			  </div>
              <!-- <input type="submit" value="Сохранить" class="submit" /> -->
          </form>
        </div>
      </div>
    </div>
  </body>
  <script>
	const terms = document.getElementById('terms');
	const submit = document.getElementById('submit');

	terms.addEventListener('change', (e) => {
		submit.disabled = !e.currentTarget.checked;
	});
  </script>
</html>