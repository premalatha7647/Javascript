/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let rev = 0;
  let rem = x;
  while (rem > 0) {
    rev = rev * 10 + (rem % 10);
    rem = Math.floor(rem / 10);
  }
  return x === rev;
};

console.log(isPalindrome(121));
