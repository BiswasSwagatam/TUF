// initial approach
var findMin = function (nums) {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }
  return min;
};

////////////////////////////////////

// another approach

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};

/////////////////////////////////////
// another approach

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[left] <= nums[right]) {
      ans = Math.min(ans, nums[left]);
      break;
    } else if (nums[left] <= nums[mid]) {
      ans = Math.min(ans, nums[left]);
      left = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      right = mid - 1;
    }
  }
  return ans;
};
