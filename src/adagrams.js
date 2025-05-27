export const drawLetters = () => {
  const lettersList = buildingLetterPool();
  const hand = [];
  
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * lettersList.length);
    const letter = lettersList.splice(index, 1);
    hand.push(letter[0]);
  }

  return hand;
};


const buildingLetterPool = () => {
  const letterPool = {
    'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2,
    'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4,
    'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
    'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1,
    'Y': 2, 'Z': 1
  };

  let letters = '';

  for (let key in letterPool) {
    letters += key.repeat(letterPool[key]);
  }

  return letters.split('');
};


export const usesAvailableLetters = (input, lettersInHand) => {
  const letterCount = buildLetterCount(lettersInHand);

  for (const letter of input) {
    if (letter in letterCount && letterCount[letter] > 0) {
      letterCount[letter]--;
    } else {
      return false;
    }
  }

  return true;
};


const buildLetterCount = (letters) => {
  const letterCount = {};

  for (const letter of letters) {
    if (letter in letterCount) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
};


export const scoreWord = (word) => {
  const letterValues = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};
  let score = 0;

  for (const letter of word.toUpperCase()) {
      score += letterValues[letter];
  }

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }

  return score;
};


export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let winningWord = '';

  for (const word of words) {
    const score = scoreWord(word);

    if (score > highestScore) {
      highestScore = score;
      winningWord = word;
      continue;
    }

    if (score === highestScore && betterCandidate(word, winningWord)) {
      winningWord = word;
    }
  }

  return { word: winningWord, score: highestScore };
};

const betterCandidate = (newWord, currentBestWord) => {
  if (newWord.length === 10 && currentBestWord.length !== 10) {
    return true;
  }

  if (currentBestWord.length === 10) {
    return false;
  }
  
  return newWord.length < currentBestWord.length;
};