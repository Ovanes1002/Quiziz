const eyeIcon = document.getElementById("eyeIcon");
const password = document.getElementById("password");

const showHideEye = function () {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    eyeIcon.classList.add("eye-open");
  } else if (password.type === "text") {
    password.setAttribute("type", "password");
    eyeIcon.classList.remove("eye-open");
  }
};
