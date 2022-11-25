window.onload = function () {
  var hidden_imgs = document.getElementsByClassName("img_gal");
  var butn = document.getElementById("button_gal");
  for (let i = 6; i < hidden_imgs.length; i++) {
    hidden_imgs[i].style.display = "none";
  }
  var count = 6;
  butn.addEventListener("click", function () {
    var imgs = document.getElementsByClassName("img_gal");
    count += 3;
    if (count <= imgs.length) {
      for (let i = 0; i < count; i++) hidden_imgs[i].style.display = "block";
    }
    if (count == imgs.length) {
      butn.style.display = "none";
    }
  });
};
