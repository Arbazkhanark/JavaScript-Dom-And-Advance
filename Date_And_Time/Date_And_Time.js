/***** Date and Time in JavaScript *****/ 
// Since 1 Jan 1970 UTC.

/*** Two Important Methods*********

1. Date Methods(get & set)
2. Time Methods(get & set) 
*/   


// Creating Date Objects:- There are 4 ways to create a date object:

const currDate=new Date();
console.log(currDate);  //2023-02-11T16:43:09.751Z (it will show something weird in console)  
console.log(currDate.toLocaleString());  //2/12/2023, 12:26:27 AM (it will show correct)
console.log(currDate.toString());  //Sun Feb 12 2023 00:28:28 GMT+0530 (India Standard Time)
console.log(Date.now());  //1676142093960  :-1 jan 1970 se lekrr aaj takk ke milliseconds.

console.log("hello")