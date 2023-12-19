//Exercise 2: Fizz Buzz

const fizzBuzz = function (n) {
  //Start coding here
  let result = [];
  for (let i = 1; i <= n; i++) {
    let text;
    if (i % 5 === 0 && i % 3 === 0) {
      text = "FizzBuzz";
    } else if (i % 3 === 0) {
      text = "Fizz";
    } else if (i % 5 === 0) {
      text = "Buzz";
    } else {
      text = i.toString();
    }
    result.push(text);
  }
  return result;
};

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
