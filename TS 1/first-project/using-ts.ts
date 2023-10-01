const button = document.querySelector("button")! as HTMLButtonElement; //! tells that element is not empty and we are specifying what type of element it is
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value) as number);
});
