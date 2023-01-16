const form = document.querySelector('.quiz-form');
const finalResult = document.querySelector('.result');

const correntAnswers = ['B', 'B', 'B', 'B'];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let score = 0;

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  userAnswers.forEach((userAnswers, index) => {
    if (userAnswers === correntAnswers[index]) {
      score += 25;
    }
  });

  scrollTo(0, 0);

  finalResult.classList.remove('d-none');

  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }

    finalResult.querySelector('span').textContent = `${score}%`;
    counter++;
  }, 10);
});
