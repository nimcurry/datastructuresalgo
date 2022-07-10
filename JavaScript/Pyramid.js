/* function Pyramid(num) {
  let col = num * 2 - 1;
  let midpoint = Math.floor(col / 2);
  for (let i = 0; i < num; i++) {
    let stair = '';
    for (let j = 0; j < col; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
        //console.log(Math.floor((i + num + 1) / 2));

        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
} */

function Pyramid(num, row = 0, stair = '') {
  //set the base case
  let numEnhanced = num * 2 - 1;
  let midpoint = Math.floor(numEnhanced / 2);
  if (num === row) {
    return;
  }

  //give reasonable defaults for bare minimum pieces of info
  if (stair.length === numEnhanced) {
    console.log(stair);
    return Pyramid(num, row + 1);
  }

  //checck the base case and see if anything is left to do. else return
  let add;
  if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
    add = '#';
  } else {
    add = ' ';
  }
  Pyramid(num, row, stair + add);
}

Pyramid(5);

module.exports = Pyramid;
