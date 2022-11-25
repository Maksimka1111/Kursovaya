function genereteNum() {
  let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return num;
}
let num1 = genereteNum();
let num2 = genereteNum();
function regs() {
  let inp1 = document.getElementById("info1");
  let inp2 = document.getElementById("info2");
  let inp3 = document.getElementById("info3");
  if (inp1.value != "" && inp2.value != "" && inp3.value != "") reg();
  else alert("Вы заполнили не все поля для регистрации");
}
function reg() {
  let inp1 = document.getElementById("info1");
  let inp2 = document.getElementById("info2");
  let inp3 = document.getElementById("info3");
  let log = prompt("Пройдите проверку:\n" + num1 + "+" + num2);
  if (log == num1 + num2) {
    alert("Регистрация пройдена");
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
  } else {
    alert("Вы ошиблись, регистрация не пройдена");
  }
}
