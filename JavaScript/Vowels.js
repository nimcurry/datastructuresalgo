function Vowels(str) {
  /*   vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < vowelsArray.length; i++) {
    for (let j of str) {
      if (j.toLowerCase() === vowelsArray[i].toLowerCase()) {
        count++;
      }
      //console.log(j);
    }
    //console.log(vowelsArray[i]);
  } */
  /*   let count = 0;
  ['a', 'e', 'i', 'o', 'u'].forEach((el) => {
    for (let j of str) {
      if (j.toLowerCase() === el) {
        count++;
      }
    }
    //console.log(el);
  });
  console.log(count); */

  /*   let count = 0;
  //const vowelString = 'aeiou';
  vowelString = ['a', 'e', 'i', 'o', 'u'];
  for (let s of str) {
    if (vowelString.includes(s)) {
      count++;
    }
  }
  //console.log(count);
  return count; */

  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

//Vowels('Hello string');
module.exports = Vowels;
