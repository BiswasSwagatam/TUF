// O(2n^2)
// Brute Force
var maxProduct = function (nums) {
  let subArrays = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      subArrays.push(nums.slice(i, j + 1));
    }
  }
  let max = -Infinity;
  for (const arr of subArrays) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    max = Math.max(max, product);
  }
  return max;
};

//////////////////////////////////////////////////////
// O(n^2)
var maxProduct = function (nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product = product * nums[j];
      max = Math.max(max, product);
    }
  }

  return max;
};

//////////////////////////////////////////////////////
// O(n)
// Optimal

var maxProduct = function (nums) {
  let pre = 1;
  let post = 1;
  let ans = -Infinity;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (pre == 0) pre = 1;
    if (post == 0) post = 1;

    pre = pre * nums[i];
    post = post * nums[n - i - 1];
    ans = Math.max(ans, Math.max(pre, post));
  }
  return ans;
};
