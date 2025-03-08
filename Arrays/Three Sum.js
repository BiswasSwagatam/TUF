// TC = O(n^2)

var threeSum = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let hashSet = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      let third = -(nums[i] + nums[j]);
      if (hashSet.has(third)) {
        let temp = [nums[i], nums[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      }
      hashSet.add(nums[j]);
    }
  }
  let st = new Set(ans.map(JSON.stringify));
  ans = Array.from(st).map(JSON.parse);
  return ans;
};

////////////////////////////////////////////

// optimal
// TC = (nlogn) + (n^2)

var threeSum = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        let temp = [nums[i], nums[j], nums[k]];
        ans.push(temp);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) j++;
        while (j < k && nums[k] == nums[k + 1]) k--;
      }
    }
  }
  return ans;
};
