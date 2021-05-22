'use strict';

let num = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = num;
// document.querySelector('.score').textContent = '18';
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //retrieved the entered value
  console.log(guess);

  //========== logic =======

  if (!guess) {
    document.querySelector('.message').textContent = ' ❌ No Number is entered';
  }
  //if game is won
  else if (guess === num) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = num;
    document.querySelector('.number').style.width = '25rem';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  //if guess is too high
  else if (guess > num) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = 'Too High!!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Better Luck, next time!!';
      document.querySelector('.score').textContent = '0';
    }
  }
  //if guess is too low
  else if (guess < num) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Better Luck, next time!!';
      document.querySelector('.score').textContent = '0';
    }
  }
});

//====== retry button ======
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#444';
  document.querySelector('.score').textContent = '20';
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  num = Math.trunc(Math.random() * 20 + 1);
});
