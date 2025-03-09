// brute force

var leaders = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let isLeader = false;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > current) {
        isLeader = false;
        break;
      } else {
        isLeader = true;
      }
    }
    if (isLeader) {
      res.push(current);
    }
  }
  res.push(nums[nums.length - 1]);
  return res;
};

/////////////////////////////////////////////

// optimal solution

var leaders = function (a) {
  let res = [];
  let max = -Infinity;

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] >= max) {
      res.push(a[i]);
    }
    max = Math.max(max, a[i]);
  }
  return res;
};
