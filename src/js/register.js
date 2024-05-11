const inputFileAvatar = document.getElementById("avatar"),
  labelFileAvatar = document.getElementById("playerAvatar"),
  terms = document.getElementById("terms"),
  submit = document.getElementById("submit");

terms.addEventListener("change", (e) => {
  submit.disabled = !e.currentTarget.checked;
});

inputFileAvatar.addEventListener("change", function () {
  let fileName = "";
  if (this.files && this.files.length) {
    fileName = this.files[0].name;
  }
  if (fileName) {
    labelFileAvatar.innerHTML = fileName;
  } else {
    labelFileAvatar.innerHTML = "Изображение профиля";
  }
});
