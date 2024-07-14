// que.1

// you have given an array filter out those who have 
// value less than 3.


// const arr=[0,1,2,3,4,5];

// 1 - arr.filter(value=>value<3 ? console.log(value): "" )

// 2 -
// const newArray = arr.filter(value=>{
//     return value<3;
// }).map((value)=>value*3);

// console.log(newArray)


// que.2
// make the first char of every word as a capital.

// const str = "hi i am Abhishek";

// const arr=str.split(" ").map((word)=>{
//     const char = word.charAt(0).toUpperCase(); 
//     return char + word.slice(1);
// })
// console.log(arr);


// function person(){

//     this.age=0;
//     setInterval(()=>{
//         this.age++;
//         console.log(this.age);
//     },1000);
//     clearInterval()

// }
// const perso = new person();
// console.log(perso);

// const arr = [1, 2, 3, 4, 5];
// arr.reduce((acc, value) => {
//     console.log(value);
//     return acc;
// }, 0);



// const element = document.getElementById('example');

// console.log(element.innerText);   // ""
// console.log(element.textContent); // "Hello, world!"


// Get the parent element by its ID
// const element = document.getElementById('example');

// // Create a new button element
// const child = document.createElement('button');

// // Append the new button to the parent element
// element.appendChild(child);

// // Select the newly created button element
// const button = document.querySelector('button');

// // Add a click event listener to the button
// button.addEventListener('click', () => {
//   console.log('Button was clicked!');
// });


// function example() {
//   var x = 1;
//   if (true) {
//     var x = 2;  // Same variable
//     console.log(x);  // 2
//   }
//   console.log(x);  // 2
// }
// example();


function example() {
  let x = 1;
  if (true) {
    let x = 2;  // Different variable 
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
example();
