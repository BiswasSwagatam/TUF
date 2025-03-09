// initial approach

function getSecondLargest(arr) {
  let max = -1;
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      arr[i] = -1;
    }
  }

  let second = -1;
  for (let i = 0; i < arr.length; i++) {
    second = Math.max(second, arr[i]);
  }
  return second;
}

////////////////////////////////////////////////
// better solution
// O(n) + O(n) = O(2n)

function getSecondLargest(arr) {
  let largest = arr[0];
  let secondL = -1;

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondL && arr[i] !== largest) {
      secondL = arr[i];
    }
  }
  return secondL;
}

///////////////////////////////////////////////////
// optimal approach
// O(n)

function getSecondLargest(arr) {
  let largest = arr[0];
  let secondL = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondL = largest;
      largest = arr[i];
    } else if (arr[i] == largest) {
      continue;
    } else if (arr[i] > secondL) {
      secondL = arr[i];
    }
  }
  return secondL;
}
