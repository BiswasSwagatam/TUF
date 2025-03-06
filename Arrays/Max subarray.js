var maxSubArray = function (nums) {
  let current = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);
    sum = Math.max(sum, current);
  }
  return sum;
};
