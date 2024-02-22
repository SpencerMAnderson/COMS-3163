'use strict';

function checkArray(b, c) {

  for (let i = 0; i < 3; i++) // Return true if all numbers in a row/column matches c
  {
    if (
        (b[i][0] === c && b[i][1] === c && b[i][2] === c) ||
        (b[0][i] === c && b[1][i] === c && b[2][i] === c)
       )
       {
        return true;
       }
  }

  if (
      (b[0][0] === c && b[1][1] === c && b[2][2] === c) || // Return true if all numbers in a diagonal matches c
      (b[0][2] === c && b[1][1] === c && b[2][0] === c)
     )
     {
      return true;
     }

    return false;

}

/*------------Below are test cases. All should return true except for the last two--------------*/

console.log(
  checkArray(
    [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [2, 2, 2],
      [0, 0, 0],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  checkArray(
    [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  checkArray(
    [
      [0, 0, 0],
      [0, 0, 0],
      [2, 2, 2],
    ],
    2
  )
);

console.log(
  checkArray(
    [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  checkArray(
    [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 0],
    ],
    2
  )
);

console.log(
  checkArray(
    [
      [0, 0, 2],
      [0, 0, 2],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  checkArray(
    [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  checkArray(
    [
      [0, 0, 2],
      [0, 2, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  checkArray(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    1
  )
);

console.log(
  checkArray(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    2
  )
);
