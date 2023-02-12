/** Math Object in JavaScript **/

// The JavaScript Math object allows you to perform  mathematical tasks on numbers.
const pi=Math.PI;
console.log(pi);   //3.141592653589793
console.log("Round: "+Math.round(pi));   //3  nearest integer
console.log(Math.floor(pi));   //3

let num=10.5;
console.log(Math.round(num));   //11        .5>
console.log(Math.floor(num));   //10


//Math.pow()
console.log(Math.pow(2,3));  //8
console.log(2**3);  //8 same


//Math.sqrt()
console.log(Math.sqrt(25));  //5
console.log(Math.sqrt(61));  //7.810249675906654
console.log(Math.sqrt(83));  //9.1104335791443



//Math.abs()    =>It will return the absolute(+ve) value of number
console.log(Math.abs(-65));   // 65
console.log(Math.abs(-55));   // 55
console.log(Math.abs(-5.5));  //5.5




//Math.ceil()    => it will return the rounded up its nearrest integer
console.log(Math.ceil(4.51)); //5
console.log(Math.ceil(99.1));  //100
console.log(Math.ceil(99.0));  //99

// Math.floor()     => reverse of ceil it return rounded down to its nearest into integer
console.log(Math.floor(4.7));   //4
console.log(Math.floor(99.1));  //99
console.log(Math.floor(99.9));  //99





// Math.min()     =>It can find the minimum value from the list of args
console.log(Math.min(0,150,30,20,-8,-20));   // -20


// Math.max()    =>It will find max value from list of args
console.log(Math.max(0,150,30,20,-8,-20));    // 150




//Math.random()         => returns random numbers b/w 0(inclusive), and 1(exclusive)
console.log(Math.random()); // range 0-1         eg.  0.4512865742823158
console.log(Math.random()*10); // range 0-9      eg.  5.4512865742823158

console.log(Math.floor(Math.random()*10));  //range 0-9 (Without decimal)






// Math.trunc()              => return the value (Integer values) before decimal rather its decimal or not
console.log(Math.trunc(2.154));   //2
console.log(Math.trunc(-2));      //-2
console.log(Math.trunc(0.2));     //0
console.log(Math.trunc(-0.2));     //-0


// If the argument is a +ve num, Math.trunc() is equivalent to  Math.floor()...
// If the argument is a -ve num, Math.trunc() is equivalent to  Math.ceil()...