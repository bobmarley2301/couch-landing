const phrases = [
  'ЕНЕРГІЯ',
  'ВНУТРІШНІЙ СПОКІЙ',
  'СТАБІЛЬНА САМООЦІНКА',
  'ЛІДЕРСЬКІ НАВИЧКИ',
  'ЗАДОВОЛЕННЯ – собою і своїм життям'
];

let currentPhraseIndex = 0;
const rotatingText = document.getElementById('rotating-text');

function rotatePhrases() {
  // Спочатку ховаємо стару фразу
  rotatingText.classList.remove('visible');

  setTimeout(() => {
    rotatingText.textContent = phrases[currentPhraseIndex];
    rotatingText.classList.add('visible'); // Показуємо нову фразу з анімацією

    // Перехід до наступної фрази
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }, 500); // Чекаємо півсекунди перед заміною фрази

}

// Оновлювати фразу кожні 3 секунди
setInterval(rotatePhrases, 3000);
rotatePhrases(); // Викликаємо відразу при завантаженні
