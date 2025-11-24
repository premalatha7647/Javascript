let n = 4;



for (i = 1; i <= 5; i++) {
  let row = "";
  for (j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

n = 4;

for (i = 0; i < n; i++) {
  let row = "";
  for (k = 0; k < n - i; k++) {
    row += " ";
  }
  for (j = n - i; j <= n + i; j++) {
    row += "*";
  }
  console.log(row);
}

for (i = 0; i < n; i++) {
  let row = "";
  for (k = 0; k < n - i; k++) {
    row += " ";
  }
  for (j = 0; j <= 2 * i; j++) {
    row += "*";
  }
  console.log(row);
}

