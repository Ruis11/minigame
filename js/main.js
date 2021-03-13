'use strict';

{
  let answer;
  let count = 1; 
  const container = document.getElementById('container');
  const target = document.getElementById('target');
  const result = document.getElementById('result');

  function setAnswer() {
    answer = Math.floor(Math.random() * 10 );
  }

  document.addEventListener('click', () => {
    if (container.classList.contains('isPlaying') === true) {
      return;
    }

    target.textContent = 'Your guess? _';
    container.classList.add('isPlaying');
    setAnswer();
  })

  document.addEventListener('keydown', e => {
    if (container.classList.contains('isPlaying') === false) {
      return;
    }

    if (e.key < answer) {
      target.textContent = `Bigger than ${e.key}! Your guess? _`;
      count++;
    } else if (e.key > answer) {
      target.textContent = `Smaller than ${e.key}! Your guess? _`;
      count++;
    } else {
      target.textContent = 'Bingo!';
      result.textContent = `It took ${count} guesses!`;
      return;
    }
  })
1
}