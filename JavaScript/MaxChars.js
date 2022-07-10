function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    for (let char of str) {

      if (charMap[char]) {
        //console.log(char, charMap, charMap[char])
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
  
    for (let char in charMap) {
        //console.log(charMap[char],char)
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    console.log(charMap, maxChar);
  }
  
  maxChar('Hello world');