// Problem-1
let carName = "Volvo";
console.log(carName);

// Problem-2
let firstName = "John",
  lastName = "Doe",
  age = 35;

// Problem-3
let x = 10;
let y = 5;
let z = x * y;
console.log(z); // Log z instead of x

// Problem-4
let length = 16; // data type: number
let lastNamee = "Johnson"; // data type: string

const xx = {
  firstName: "John",
  lastName: "Doe",
}; // data type: object

// Problem-5
function myFunction() {
  alert("Hello World!");
}

const button = document.getElementById("myButton");
button.addEventListener("click", myFunction); // Pass the function reference, not the call

// Problem-6
let person = {
  name: "John",
  age: 50,
};

console.log(person.name + " is " + person.age);

// Problem-7
const buttons = document.getElementById("myButton-2");

buttons.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Problem-8
const cars = ["Volvo", "Jeep", "Mercedes"];
alert("Number of items in the array: " + cars.length);

// Problem-9
const randomNumber = Math.random();
console.log(randomNumber);

const largestNumber = Math.max(10, 20);
console.log(largestNumber);

const squareRoot = Math.sqrt(9);
console.log(squareRoot);

// Problem-10
x = 10;
y = 5;

alert(x > y);

age = 16;

alert(age < 18 ? "Too young" : "Old enough");
