var findMaxLength = function (nums) {
  let map = new Map();
  let len = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (sum === 0) {
      len = i + 1;
    } else if (map.has(sum)) {
      len = Math.max(len, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return len;
};
