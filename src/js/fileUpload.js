let inputFile = document.getElementById("avatar"),
  labelFile = document.getElementById("playerAvatar");

inputFile.addEventListener("change", function () {
  console.log(this.files);
  let fileName = "";
  if (this.files && this.files.length) {
    fileName = this.files[0].name;
  }
  if (fileName) {
    labelFile.innerHTML = fileName;
  } else {
    labelFile.innerHTML = "Изображение профиля";
  }
  console.log(fileName);
});
