function spiralMatrix(n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  //console.log(results);

  let counter = 1;
  let startRow = 0,
    endRow = n - 1,
    startColumn = 0,
    endColumn = n - 1;

  while (startColumn <= endColumn && startRow <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endRow] = counter;
      counter++;
    }
    endColumn--;

    //Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

//spiralMatrix(3);

module.exports = spiralMatrix;
