var moveZeroes = function (nums) {
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[temp] = nums[i];
      temp++;
    }
  }

  while (temp < nums.length) {
    nums[temp] = 0;
    temp++;
  }
};
