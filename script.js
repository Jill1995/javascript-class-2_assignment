let char = "*";

//conventional function declaration
function drawPyramid(numOfLines) {
  //assigning default value to numoflines
  numOfLines = numOfLines || 3;

  for (let row = 1; row < numOfLines; row++) {
    for (let column = 1; column < row; column++) {
      char = char + "*";
    }
    console.log(char);
    char = "*";
  }
}

//using arrow notation
const invertedPyramid = numOfLines => {
  numOfLines = numOfLines || 3;

  for (let row = numOfLines; row >= 0; row--) {
    for (let column = 1; column < row; column++) {
      char = char + "*";
    }
    console.log(char);
    char = "*";
  }
};

//a function which draws a triangular pattern with input
//on how many triangles we want and num of lines in each triangle

function drawPattern(num, numOfLines) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      drawPyramid(numOfLines);
    } else {
      invertedPyramid(numOfLines);
    }
  }
}

drawPattern(6, Math.floor(Math.random() * 10));
