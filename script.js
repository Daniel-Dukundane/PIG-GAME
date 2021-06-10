'use strict';

let dice,
  activePlayer = 0,
  currentScore = 0;
document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn--roll').addEventListener('click', function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 1) {
    document.querySelector('.dice').style.display = 'none';
    if (activePlayer === 0) {
      currentScore = 0;
      document.getElementById('current--' + activePlayer).textContent =
        currentScore;
      activePlayer = 1;
    } else {
      currentScore = 0;
      document.getElementById('current--' + activePlayer).textContent =
        currentScore;
      activePlayer = 0;
    }
  } else {
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    console.log(dice);

    currentScore = currentScore + dice;
    document.getElementById('current--' + activePlayer).textContent =
      currentScore;
  }
});
