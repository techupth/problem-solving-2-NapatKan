//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  const numeralComparison = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;

  for (let i = 0; i < s.length; i++) {
    let currentNumber = numeralComparison[s[i]];
    let numberAfter = numeralComparison[s[i + 1]];
    currentNumber < numberAfter
      ? (value -= currentNumber)
      : (value += currentNumber);
  }
  return value;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
