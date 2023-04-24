"use strict";

// 1. countWords
function countWords(phrase) {
  const wordCounts = {};

  for (const word of phrase.split(" ")) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.5: ["Cantaloupe", "Honeydew"],
    2.95: ["Watermelon"],
    3.25: ["Musk", "Crenshaw"],
    14.25: ["Christmas"],
  };

  if (!melonPrices[price]) {
    return;
  }
  return melonPrices[price].sort();
}
