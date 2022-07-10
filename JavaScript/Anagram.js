/*  using character maps */

/* function anagrams(stringA, stringB) {
  const aCharMap = characterMap(stringA);
  const bCharMap = characterMap(stringB);

  if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
} */
/* if object is iterated use "of" in the for loop. for array use "in" in the for loop */
/* function characterMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
} */

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
module.exports = anagrams;
