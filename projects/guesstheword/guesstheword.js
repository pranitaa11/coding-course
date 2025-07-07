const words = [
  "Elephant",
  "Computer",
  "Banana",
  "Universe",
  "Watermelon",
  "Rocket",
  "Jungle",
  "Python",
  "Library",
  "Rainbow",
  "Pencil",
  "Chocolate"
];

const wordDiv = document.querySelector('.word');
const button = document.querySelector('.btn');

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

button.addEventListener('click', () => {
  const newWord = getRandomWord();
  wordDiv.textContent = newWord;
});
