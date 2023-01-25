"use strict"

//console.log("Hello World");

document.write("<h1>Array Demo</h1>")

// const drinks =["Coffe", "water", "sode", 'Tea'];

// drinks.push('juice');

// for(let i=0; i<5; i++){
//     console.log(drinks[i]);
// }

// //drinks.push('juice');

// console.log(drinks);

const hours = [' 9am ', ' 10am ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm '];
hours.unshift('open');
let start = 3;
let deleteItem = 0;
hours.splice(start, deleteItem, "closed" , "llam-12am for lunch" , "open");
 for(let i=0; i<hours.length; i++){
 document.write("<ul>", hours[i], "</ul>");
 }


 function extendedHours(){
    hours.push("5pm");
    hours.push("6pm");
 }


 
 console.log(hours);