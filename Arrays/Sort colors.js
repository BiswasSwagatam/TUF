var sortColors = function (nums) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (const num of nums) {
    if (num == 0) {
      count0++;
    } else if (num == 1) {
      count1++;
    } else {
      count2++;
    }
  }

  for (let i = 0; i < count0; i++) {
    nums[i] = 0;
  }
  for (let i = count0; i < count0 + count1; i++) {
    nums[i] = 1;
  }
  for (let i = count0 + count1; i < nums.length; i++) {
    nums[i] = 2;
  }

  return nums;
};

///////////////////////////////////////////////////////

var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      let temp = nums[mid];
      nums[mid] = nums[low];
      nums[low] = temp;
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    }
  }
  return nums;
};
