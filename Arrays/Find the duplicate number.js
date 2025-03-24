var findDuplicate = function (nums) {
  let freq = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]] == 0) {
      freq[nums[i]] += 1;
    } else {
      return nums[i];
    }
  }
};

/////////////////////////////////////////////////
