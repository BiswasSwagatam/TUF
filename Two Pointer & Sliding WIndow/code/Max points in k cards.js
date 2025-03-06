var maxPoints = function (cards, k) {
  let lSum = 0;
  let rSum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    lSum += cards[i];
    max = lSum;
  }
  let right = cards.length - 1;
  for (let i = k - 1; i >= 0; i--) {
    lSum = lSum - cards[i];
    rSum = rSum + cards[right];
    right--;

    max = Math.max(max, lSum + rSum);
  }

  return max;
};
