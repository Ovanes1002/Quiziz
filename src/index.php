<?php

require_once __DIR__ . '/helpers.php';

checkGuest();

?>

<?php include_once "head.php"; ?>
	<body>
	<div class="headerSite">Quiziz</div>
		<div class="container">
			<div class="startPage">
			<h1>Добро пожаловать в викторину Quiziz!</h1>
			<div class="nameInput">
				<form class="loginForm" action="/actions/login.php" method="post">
					<h2>Вход</h2>

					<?php if(hasMessage(key:'error')): ?>
						<div class="error">
							<?php echo getMessage(key:'error') ?>
						</div>
					<?php endif; ?>


					<div class="input-group">
						<div class="playerEmail">
							<label for="email">
								 Ваша почта: 
							</label>
							<input 
								type="text" 
								id="email"
								name="email"
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
						
						<div class="playerPassword">
							<label for="password"> 
								Ваш пароль: 
							</label>
							<input 
							type="password" 
							id="password"
							name="password"
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
</html>