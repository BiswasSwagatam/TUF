// initial

var rearrangeArray = function (nums) {
  let positive = [];
  let negative = [];
  let ans = [];

  for (const num of nums) {
    if (num > 0) {
      positive.push(num);
    } else {
      negative.push(num);
    }
  }

  for (let i = 0; i < positive.length; i++) {
    ans.push(positive[i]);
    ans.push(negative[i]);
  }
  return ans;
};

// another

var rearrangeArray = function (nums) {
  let ans = new Array(nums.length).fill(0);
  let pi = 0;
  let ni = 1;

  for (const num of nums) {
    if (num > 0) {
      ans[pi] = num;
      pi += 2;
    } else {
      ans[ni] = num;
      ni += 2;
    }
  }
  return ans;
};
