// CODED BY DANIEL DUKUNDANE
'use strict';
function changePlayer() {
  if (activePlayer === 0) {
    currentScore = 0;
    document.getElementById('current--' + activePlayer).textContent =
      currentScore;
    document
      .querySelector('.player--' + activePlayer)
      .classList.remove('player--active');
    activePlayer = 1;
    document
      .querySelector('.player--' + activePlayer)
      .classList.add('player--active');
  } else {
    currentScore = 0;
    document.getElementById('current--' + activePlayer).textContent =
      currentScore;
    document
      .querySelector('.player--' + activePlayer)
      .classList.remove('player--active');
    activePlayer = 0;
    document
      .querySelector('.player--' + activePlayer)
      .classList.add('player--active');
  }
}
function winnerMsg() {
  document.getElementById('name--' + activePlayer).textContent =
    'PLAYER ' + (activePlayer + 1) + ' WINS 🏆';
  document.querySelector('.btn--roll').setAttribute('disabled', true);
  document.querySelector('.btn--hold').setAttribute('disabled', true);
}
function startGame() {
  let names = document.querySelectorAll('.name');
  for (let i = 0; i < names.length; i++) {
    document.getElementById('name--' + i).textContent = 'Player ' + (i + 1);
  }

  document.querySelector('.btn--roll').removeAttribute('disabled');
  document.querySelector('.btn--hold').removeAttribute('disabled');
}

let dice,
  activePlayer = 0,
  currentScore = 0,
  totalScore = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('score--0').textContent = 0;
document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn--roll').addEventListener('click', function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 1) {
    document.querySelector('.dice').style.display = 'none';
    changePlayer();
    totalScore = Number(
      document.getElementById('score--' + activePlayer).textContent
    );
  } else {
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    console.log(dice);

    currentScore = currentScore + dice;
    document.getElementById('current--' + activePlayer).textContent =
      currentScore;
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  document.querySelector('.dice').style.display = 'none';
  totalScore = totalScore + currentScore;
  console.log(totalScore);
  document.getElementById('score--' + activePlayer).textContent = totalScore;
  if (totalScore >= 100) {
    winnerMsg();
  }
  changePlayer();
  totalScore = Number(
    document.getElementById('score--' + activePlayer).textContent
  );
});

document.querySelector('.btn--new').addEventListener('click', function () {
  startGame();
  (activePlayer = 0), (currentScore = 0), (totalScore = 0);
  document
    .querySelector('.player--' + activePlayer)
    .classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.getElementById('score--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
});
