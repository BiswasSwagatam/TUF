// initial approach

var missingNumber = function (nums) {
  let ans;
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      ans = i;
    }
  }
  return ans;
};

////////////////////////////////

// optimal approach

var missingNumber = function (nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
  }
  return sum - s;
};
