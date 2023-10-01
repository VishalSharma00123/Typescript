// function add(n1, n2) {
//   return n1 + n2;
// }

// const number1 = "5";
// const number2 = 3.4;
// console.log(add(number1, number2)); //result will be 53.4 bcz when js sees any value as string then it treats every other value as string this is why TS is important
// // if we would have used TS here,then it would have thrown error that two different Datatype cant be added

function add(n1: number, n2: number) {
  if (typeof n1 !== "number" && typeof n2 !== "number") return n1 + n2;
  {
    throw new Error("Incorrect Input");
  }
  return n1 + n2;
}

const number1: number = "5";
const number2: number = 3.4;
console.log(add(number1, number2));
