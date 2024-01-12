const dom = {
  roll: document.querySelector(".roll"),
};
const guess = prompt("enter number 1-6 ");
const diceresult = Math.floor(Math.random() * 6) + 1;
console.log(diceresult);
dom.roll.addEventListener("click", function () {
  if (guess === diceresult) {
    document.getElementsByClassName("text").textContent = "your right";
  } else if (guess > diceresult) {
    document.getElementsByClassName("text").textContent = "you rolled higher";
  } else if (guess < diceresult) {
    document.getElementsByClassName("text").textContent = "you rolled lower";
  }
});
