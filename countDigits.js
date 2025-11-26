function countDigits(n) {
  let count = 0;
  while (n % 10 > 0) {
    count++;
    n = parseInt(n / 10);
  }

  return count;
  //   return n.toString().length;
}

console.log(countDigits(125.7));
