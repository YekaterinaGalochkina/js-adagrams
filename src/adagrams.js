////////// Wave 1 //////////
export const drawLetters = () => {
  const lettersList = buildingLetterPool();
  const hand = []
  
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * lettersList.length);
    const letter = lettersList.splice(index, 1);
    hand.push(letter[0]);
  }

  return hand
};


////////// Helper function to built list of all letters //////////
const buildingLetterPool = () => {
  const letterPool = {
    'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2,
    'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4,
    'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
    'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1,
    'Y': 2, 'Z': 1
  };

  let letters = '';
  for (let [key,value] of Object.entries(letterPool)) {
    letters += key.repeat(value);
  }
  
  return letters.split('');
}


////////// Wave 2 //////////
export const usesAvailableLetters = (input, lettersInHand) => {
  const letterCount = {};

    for (const letter of lettersInHand) {
        if (letter in letterCount) {
            letterCount[letter]++;
        } else {
            letterCount[letter] = 1;
        }
    }

    for (const letter of input) {
        if (letter in letterCount && letterCount[letter] > 0) {
            letterCount[letter]--;
        } else {
            return false;
        }
    }

    return true;
};



export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
