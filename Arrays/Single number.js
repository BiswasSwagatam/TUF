var singleNumber = function (nums) {
  let set = {};

  for (let i = 0; i < nums.length; i++) {
    set[nums[i]] = (set[nums[i]] || 0) + 1;
  }

  for (const num in set) {
    if (set[num] == 1) {
      return +num;
    }
  }
};
