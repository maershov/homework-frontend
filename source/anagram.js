'use strict';
const anagram = inputArr => {

  if ((!inputArr.length)||(!Array.isArray(inputArr))) { //проверка того, что входной массиы вообще массив
    return [];
  }

  let anagramBuffer = {};
  inputArr.sort().forEach(word => {
    let sorted = word
                   .toLowerCase()
                   .split('')
                   .sort()
                   .join('');

    if (!anagramBuffer[sorted]) {
      anagramBuffer[sorted] = [];
    }

    anagramBuffer[sorted].push(word);
  });
  const outputArr = [];

  for (const key in anagramBuffer) {
    if (anagramBuffer[key].length > 1) {
      outputArr.push(anagramBuffer[key]);
    }
  }

  return outputArr;
};
