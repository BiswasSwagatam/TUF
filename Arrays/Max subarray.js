var maxSubArray = function (nums) {
  let current = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);
    sum = Math.max(sum, current);
  }
  return sum;
};

///////////////////////////////////////////////////
// printing the subarray

var findDuplicate = function (nums) {
  let sum = 0;
  let maxi = -Infinity;
  let ansStart,
    ansEnd = -1;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum == 0) {
      start = i;
    }
    sum = sum + nums[i];

    if (sum > maxi) {
      maxi = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return nums.slice(ansStart, ansEnd + 1);
};
