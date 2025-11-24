let arr = [1, 2, 3, 4, 5];

function findElementIndex(num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

function findElementIndex1(num) {
  let index;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      index = -1;
    } else {
      index = i;
      break;
    }
  }
  return index;
}

console.log(findElementIndex(2));
console.log(findElementIndex1(4));
console.log(arr.findIndex((e) => e === 8));

function findNegativeNumbers(arr) {
  let a = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      a.push(arr[i]);
    }
  }
  return a;
}
function findNegativeCounts(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let array = [1, -3, -6, 0, 24, 6, -1, -1];
console.log(findNegativeNumbers(array));
console.log(findNegativeCounts(array));
console.log(array.filter((item) => item < 0));

function findGreatestNumber(arr) {
  let bigNum = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (bigNum < arr[i]) {
      bigNum = arr[i];
    }
  }
  return bigNum;
}

array = [-81, 2, -21, 11, 4, -18];

console.log(findGreatestNumber(array));

function findMinNumber(arr) {
  let minNum = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }
  return minNum;
}

console.log(findMinNumber(array));

console.log(array.reduce((accu, current) => (accu > current ? accu : current)));

function secondLargestNum(arr) {
  let bigNum = -Infinity;
  let secondNum = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > bigNum) {
    secondNum = bigNum
      bigNum = arr[i];
    }else if(arr[i] > secondNum && arr[i] != bigNum){
        secondNum = arr[i]
    }
  }
  
  return secondNum;
}

array =[5,1,1];
console.log("second largest number", secondLargestNum(array));
