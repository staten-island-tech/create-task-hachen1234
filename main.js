const dom = {
  roll: document.querySelector(".roll"),
  h1: document.querySelector(".text"),
  input: document.querySelector(".yournumber"),
  output: document.querySelector(".thedicenumber"),
  historylist: document.querySelector(".history"),
  historybtn: document.querySelector(".historybtn"),
};
const history = [];
dom.roll.addEventListener("click", function () {
  let guess = prompt("enter number 1-6 ");
  dom.input.innerHTML = guess;
  let diceresult = Math.floor(Math.random() * 6) + 1;
  dom.output.innerHTML = diceresult;
  if (guess == diceresult) {
    dom.h1.innerHTML = "your right";
    history.push("your right");
  } else if (guess > diceresult) {
    dom.h1.innerHTML = "you guessed higher";
    history.push("you guessed higher");
  } else if (guess < diceresult) {
    dom.h1.innerHTML = "you guessed lower";
    history.push("you guessed lower");
  }
});
function display(history) {
  for (let i = 0; i < history.length; i++) {
    if (i > 0) {
      dom.historylist.insertAdjacentHTML(
        "afterbegin",
        ` <div class="list">${i} ${history[i - 1]}</div>`
      );
    } else {
      dom.historylist.innerHTML = "";
    }
  }
}
dom.historybtn.addEventListener("click", () => display(history));
