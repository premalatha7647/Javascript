
var reverse = function (x) {

    let rev = 0;
    let xCopy = Math.abs(x)
    while (xCopy > 0) {
        rev = rev * 10 + (xCopy % 10);
        xCopy = Math.floor(xCopy / 10);
    
    }
    return x < 0 ? rev *-1 : rev
};

console.log(reverse(1534236469))