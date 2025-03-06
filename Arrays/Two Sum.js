var twoSum = function (nums, target) {
  const sums = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in sums) {
      return [i, sums[diff]];
    } else {
      sums[nums[i]] = i;
    }
  }
};
