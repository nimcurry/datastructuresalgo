//1. using For loop
/* function steps(num) {
  for (let j = 0; j < num; j++) {
    let stair = '';
    for (let i = 0; i < num; i++) {
      if (i <= j) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    //stair += '\n';
    console.log(stair);
  }
  //console.log(stair);
}

//Steps(5);
module.exports = steps; */

/* function printNumber(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printNumber(n - 1);
}

printNumber(10);
 */

//recursion solution

function steps(num, row = 0, stair = '') {
  //set the base case
  if (num === row) {
    return;
  }

  //give reasonable defaults for bare minimum pieces of info
  if (stair.length === num) {
    console.log(stair);
    return steps(num, row + 1);
  }

  //checck the base case and see if anything is left to do. else return
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(num, row, stair);
}
steps(5);
module.exports = steps;
