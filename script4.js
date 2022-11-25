window.onload = function () {
  var hidden_imgs = document.getElementsByClassName("other_img");
  let screen_width = window.screen.width;
  var i = 6;
  var butn = document.getElementById("button_other");
  for (i; i < hidden_imgs.length; i++) {
    hidden_imgs[i].style.display = "none";
  }
  var count = 10;
  butn.addEventListener("click", function () {
    for (let i = 0; i < count; i++)
      if (hidden_imgs[i].style.display == "none")
        hidden_imgs[i].style.display = "block";
      else hidden_imgs[i].style.display = "none";
    if (butn.textContent == "Показать еще") butn.innerText = "Вернуться";
    else butn.innerText = "Показать еще";
  });
};
