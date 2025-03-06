var productExceptSelf = function (nums) {
  const prefix = new Array(nums.length).fill(1);
  const postfix = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1];
  }

  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(prefix[i] * postfix[i]);
  }
  return ans;
};
