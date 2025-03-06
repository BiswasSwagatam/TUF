var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let len = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    let currLen = right - left + 1;
    len = Math.max(len, currLen);
  }
  return len;
};
