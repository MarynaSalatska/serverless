// const readline = require("readline");
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sortAlphabetically(words) {
  return words.sort();
}

function sortNumbersAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

function sortNumbersDescending(numbers) {
  return numbers.sort((a, b) => b - a);
}

function sortByWordLength(words) {
  return words.sort((a, b) => a.length - b.length);
}

function showUniqueWords(words) {
  return [...new Set(words)];
}

function showUniqueValues(values) {
  const uniqueValues = [];
  const uniqueSet = new Set();

  values.forEach((value) => {
    if (!uniqueSet.has(value)) {
      uniqueSet.add(value);
      uniqueValues.push(value);
    }
  });

  return uniqueValues;
}

function processInput(input) {
  const wordsAndNumbers = input.split(" ");
  const words = [];
  const numbers = [];

  wordsAndNumbers.forEach((item) => {
    if (isNaN(item)) {
      words.push(item);
    } else {
      numbers.push(Number(item));
    }
  });

  return { words, numbers };
}

function handleInput(input) {
  const { words, numbers } = processInput(input);

  rl.question("What operation would you like to perform? ", (operation) => {
    let result;

    switch (operation) {
      case "Sort words alphabetically":
        result = sortAlphabetically(words);
        break;
      case "Show numbers from lesser to greater":
        result = sortNumbersAscending(numbers);
        break;
      case "Show numbers from bigger to smaller":
        result = sortNumbersDescending(numbers);
        break;
      case "Display words in ascending order by number of letters in the word":
        result = sortByWordLength(words);
        break;
      case "Show only unique words":
        result = showUniqueWords(words);
        break;
      case "Display only unique values":
        result = showUniqueValues(wordsAndNumbers);
        break;
      default:
        console.log("Invalid operation. Please try again.");
        handleInput(input);
        return;
    }

    console.log("Result:", result);
    rl.question('Enter new input (or type "exit" to quit): ', handleInput);
  });
}

rl.question("Enter words or numbers separated by space: ", handleInput);
