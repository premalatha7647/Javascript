let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("________________________");
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("________________________");
for (let i = 0; i < n; i++) {
  let row = "";
  for (k = 0; k < n - i; k++) {
    row += " ";
  }
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("________________________");
/* 
1
12
123
1234
12345
*/
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
console.log("________________________");
/*
1
22
333
4444
55555
*/

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += i + 1;
  }
  console.log(row);
}

console.log("________________________");
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += j + 1;
  }
  console.log(row);
}
console.log("________________________");
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += "*";
  }
  console.log(row);
}
console.log("________________________");

for (let i = 0; i < n; i++) {
  let row = "";
  for ( let j=0;j <= n - i - 1; j++) {
    row += " ";
  }
  for (let k = 0; k <= i; k++) {
    row += "*";
  }
  console.log(row);
}

console.log("________________________");

for(let i=1; i<=n;i++){
   let row = "";
  for(let j=1; j<=i; j++){
      row += j%2
  }
    console.log(row);
}
console.log("________________________");

for (i = 1; i <= 5; i++) {
  let row = "";
  for (j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
console.log("________________________");
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
console.log("________________________");
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
