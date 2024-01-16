const dom = {
  roll: document.querySelector(".roll"),
  h1: document.querySelector(".text"),
  input: document.querySelector(".yournumber"),
  output: document.querySelector(".thedicenumber"),
};
dom.roll.addEventListener("click", function () {
  let guess = prompt("enter number 1-6 ");
  dom.input.innerHTML = guess;
  let diceresult = Math.floor(Math.random() * 6) + 1;
  dom.output.innerHTML = diceresult;
  if (guess == diceresult) {
    dom.h1.innerHTML = "your right";
  } else if (guess > diceresult) {
    dom.h1.innerHTML = "you guessed higher";
  } else if (guess < diceresult) {
    dom.h1.innerHTML = "you guessed lower";
  }
});
