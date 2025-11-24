let a = [3, 0, -4, 0, -19, 7, -1];
let b = [];
let c = [];
let d = [];
for (i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    b.push(a[i]);
  } else if (a[i] == 0) {
    c.push(a[i]);
  } else {
    d.push(a[i]);
  }
}

console.log([...b, ...c, ...d]);

// console.log(prompt("enter input"))

let arr = [
  [1, 2],
  [3, 4],
];

console.log(arr[1][1]);

let char = "Prema";

console.log(char.charAt(2));

console.log(...char);
console.log(Array.from(char));

// console.log( char[char.size -2] = 'l')

let k = 5;

while (k < 5) {
  console.log("while", k);
  k++;
}

do {
  console.log("do while ", k);
  k++;
} while (k < 5);

let j = function fn() {
  console.log("im in function");
};

function fn1() {
  console.log("fn 1");
}

console.log(j);
console.log(j());
console.log(fn1);
console.log(fn1());

arr = [1, "2", 12.1, true];

console.log(typeof arr[arr.length - 1]);
console.log(typeof arr);

