const dom = {
  roll: document.querySelector(".roll"),
};
const guess = prompt("enter number 1-6 ");
dom.roll.addEventListener("click", function () {
  diceresult = Math.floor(Math.random() * 6) + 1;
  console.log(diceresult);
});
