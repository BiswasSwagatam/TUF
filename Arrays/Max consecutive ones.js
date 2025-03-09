var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else if (nums[i] == 0) {
      count = 0;
    }
    max = Math.max(max, count);
  }
  return max;
};
