function addition(a, b) {
  return a + b;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

function addNextNum(num) {
  return (num += 1);
}

console.log(addNextNum(0));

console.log(addNextNum(9));

console.log(addNextNum(-3));

function giveMeSomething(a) {
  return "something " + a;
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));

function lessThanOrEqualToZero(num) {
	if (num <= 0) {
        return true
    }
    else{
        return false
    }
}

console.log(lessThanOrEqualToZero(5))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))