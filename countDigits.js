function countDigits(n) {
  let count = 0;

  // while (n % 10 > 0) {
  //   count++;      ===> will wrong since the out put can be end with 0 i.e 250
  //   n = parseInt(n / 10);
  // }
  if (n === 0) return 1;
  n = Math.abs(n)
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count;
  //   return n.toString().length;
}

console.log(countDigits(-125.7));
