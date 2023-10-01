const person: {
  name: string; //string
  age: number; //number
  hobbies: string[]; //Array
  role: [number, string]; //tuples:consist of specified lentgth excpet the only exception in tuple is that you can push the element but you cant modify it
} = {
  name: "Vishal Sharma",
  age: 23,
  hobbies: ["sports", "Cooking"],
  role: [2, "author"],
};
console.log(person.age);
console.log(person.name);
// person.role[1]=4 Error :Type 'number' is not assignable to type 'string'.
person.role[0] = 77; //No Error
person.role.push("swimmimg");
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// Enum

enum rollNumber {
  A = 1,
  B,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
}

console.log(rollNumber.A);
console.log(rollNumber.B);
console.log(rollNumber.c);
console.log(rollNumber.d);
console.log(rollNumber.e);
console.log(rollNumber.f);
console.log(rollNumber.g);
console.log(rollNumber.h);
console.log(rollNumber.i);
