function add(n1: number, n2: number, showResult: boolean, Phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!");
  // }
  const result = n1 + n2; //we are adding two numbers here because if add it with the string later the result would be 'Result is : 52.8' instead of 'Result is : 7.8'
  if (showResult) {
    console.log(Phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is : ";

add(number1, number2, printResult, resultPhrase);
