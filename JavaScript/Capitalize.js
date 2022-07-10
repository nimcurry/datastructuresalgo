/* 4 solutions to Capitalize problem */

// Solution 1
/* function Capitalize(str) {
  let result = [];
  let l = [];
  l = str.split(" ");
  l.forEach((element) => {
    result.push(element[0].toUpperCase() + element.slice(1));
  });
  return result.join(" ");
}

//Capitalize("i love breakfast at bill miller bbq");

module.exports = Capitalize; */

//Solution 2
/* function Capitalize(str) {
  let result = [];
  //result = str.split(" ");
  for (let i of str.split(" ")) {
    result.push(i[0].toUpperCase() + i.slice(1));
  }
  return result.join(" ");
}

module.exports = Capitalize; */

//Solution 3

/* function Capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
module.exports = Capitalize; */

function Capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
module.exports = Capitalize;
