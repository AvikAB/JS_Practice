]// variables: (var, let, const)
/*
var x = 10;    // var - old & not safe, redeclaration
let y = 12;   // let - modern & safe, not-redeclaration
const z = 13;  // const - constant val

console.log(x);
console.log(y);
console.log(z);
*/

// Hoisting = JS moves declarations to the top of their scope before code runs.
/*
console.log(a);  // undefined (not an error)
var a = 10;

console.log(b);  // ReferenceError (with let & const) [Temporal Dead Zone]
let b = 20;
*/

/* Whats happening here:
console.log(b);
let b = 20;
Then this happened in the code:
let b = undefined;
console.log(b);
b = 20;

var -> hoist -> undefined
let -> hoist -> no value set
const -> hoist -> no val set
*/

// var & let:
// let & const follow block spots {}, while var ignores it but var only obey the function

/*
var a = 10;
{
    console.log("Inside:", a);
}
console.log("Outside:", a);

let b = 20;
{
    let b = 200;
    console.log("Inside:", b);
}
console.log("Outside:", b)
*/

// Datatypes & Type system:

// Primtive types: (string, number, boolean, null) - jader bracket laagena (copy korle real copy pawa jai)
// Non-primtive types: (arrays, objects, functions) - jader bracket laage (real copy ashe na, copy er reference jai, copy theke delete korle main thekeo delete hoi)
/*
String: '', "", ``(backticks) er vitore je united char gula thake.
*/

// Undefined by default JS rakhe, aar null manually user dei, pore ekhane je data rakhbo seta thakbe ekhane.
/*
let x;
console.log(x);   // undefined
let y = null;
console.log(y);   // null
*/

// Symbol -> unique immutable value
/*
let u1 = Symbol("uid");
let u2 = Symbol("uid");
console.log(u1 == u2);  // false
*/

// int:
/*
console.log(Number.MAX_SAFE_INTEGER);  // limit of int

let a = 9007199254740991n;  // this n after number means this is bigint (always need n to call it in every cases)
console.log(a + 3n);
*/

// Dynamic type: JS has no static data type because of var, let. Here in let we can add int number, string, char or any boolean type.
/*
let a = 12;
a = true;
a = "sam";
console.log(a);
*/

// type of
/*
console.log(typeof (12));
console.log(typeof ("Avik"));
console.log(typeof (NaN));  // NaN -> not a number, but its type is number
console.log(typeof (null));  // null's type is object

/// Why NaN === Number ? - Mathematical failed numerical operation e NaN hoi. Let, 2*"AVIK" = NaN, its mathematical error case but also a number datatype.
*/

// Type Coercion: different datatype but one is automatically convert while running. 
// in C++, we can not "5"+1 where one is string and other one is int, but in JS that 1 will automatically converted to string

/*
console.log("5" + 1);  // is there any string & "+" sign then it will do addition or concatenation, here concatenation so the number will be a string
console.log("5" - 1);   // here '-' is present it can do only substraction so it will give (5-1) = 4

let a = "5" * 2;   // it has '*' so its doing multiplication and converted the whole into a number
console.log(a);
console.log(typeof (a));
*/

// Truthy vs Falsy values:  (using "!!" in front then it will show its whuch type true or false)
// False: 0, false, NaN, Undefined, document.all, null, ""
// True: rest all
/*
console.log(!!NaN);
console.log(!!0);
console.log(!!1);
console.log(!!-1);
*/

// Operators:
/*
Same as C++.
** -> Exponentiation. (2**3) = 2^3 = 8
== -> equal comparison operator, eta shudhu value check kore, type check kore na.
=== -> equal comparison operator, eta type check kore.

12 == "12" -> true
12 === "12" -> false
*/

// Control flow: if, else, else if, switch all are same as c++.
// Loops: for, while, do-while
// Kothai theke start hobe, kothai giye thamte hobe, kivabe jete hobe jana thakle - for loop
// Kothai theke start hobe, kokhon thamte hobe (condition), kivabe jaite hobe jana thakle - while loop
// for loop:
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

// While loop:
/*
let i = 1;
while (i < 20) {   // while(condition){...}
    console.log(i);
    i++;
}
*/

// Do-while:
/*
let i = 12;
do {
    console.log(i);
    i++;
}
while (i <= 20);
*/

// Break, continue:
/*
for (let i = 1; i <= 30; i++) {
    if (i === 22) break;   // 22 e eshe loop break korbe
    console.log(i);
}

for (let i = 1; i <= 30; i++) {
    if (i === 22) continue;   // 22 e eshe skip kore 23 theke abar suru korbe
    console.log(i);
}
*/

// Loop Practice:
/*
// Multiplication table of 5:
let n = 5;
for (let i = 1; i <= 10; i++) {
    console.log("5 x", i, "=", n * i);
}

// Another way:
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}
*/

// User will give a num, check it odd or even:
/*
const ps = require('prompt-sync');
const prompt = ps();
let input = prompt("Given a num:");
let val = Number(input);

if (isNaN(val) || !Number.isInteger(val)) {
    console.log("Invalid Number");
} else if (val % 2 === 0) console.log(`${val} is even`);
else console.log(`${val} is odd`);
*/

// Functions:

/*
function dance() {    // function statement
    console.log("Dance");
    console.log("Dance");
    console.log("Dance");
}

dance();
*/

/*
let dance = function () {   // function expression - save the function into a variable
    console.log("Dance");
    console.log("Dance");
    console.log("Dance");
}

dance();
*/

// Fat arrow function ()=>{}
/*
let dance = () => {
    console.log("Dance");
    console.log("Dance");
}

dance();
*/

// Parameter & Arguments

/*
function animal(val) {
    console.log(`${val} is an animal`);
}

animal("Horse");
animal("Lion");
animal("Dog");
*/

/*
function add(val1, val2) {   // val1 & val2 are parameters
    console.log(val1 + val2);
}

add(1, 2);      // 1,2 are arguments (means real vals used when need to call the function then it is arguments
add(11, 22);
add(111, 222);
*/

// Default, Rest & Spread Parameters:

/*
function add(v1, v2) {
    console.log(v1, v2);   // print: undefined undefined because no values are send here
    console.log(v1 + v2);  // print: NaN its not possible to add two undefined nums
}

add();
*/

// Solution for this:

/*
function add(v1 = 0, v2 = 0) {   // This parameter is called default parameter
    console.log(v1 + v2);
}

add();      // print: 0
add(1, 2);  // print: 3 (because values are assign here & add function will store these over that 0)
*/

/* Rest & Spread parameter (...): When there is too many arguments for function call then there needs to add too many parameters in fuction.
    For the solution of this problem we use Rest or Spread parameter. This are used as an array.

    When ... uses in the function parameter then its Rest operator, Same (...) are uses in arrays & objects then it is spread operator.
*/
/*
function abcd(...val) {
    console.log(val);
}

abcd(1, 2, 3, 4, 5, "avik");
*/
/*
function abcd(a, b, c, ...val) {
    console.log(val);
    console.log(a, b, c, val);
}

abcd(1, 2, 3, 4, 5, "Avik");
*/

// Return & Early Return:

// Return always use in a function, it gives the result of a function to the function call.
// First class funcs: Functions treated as a value, where we use value we can also use function there.
/*
function abcd(val) {  // now abcd() is the higher order function (hof)
    val();
}

abcd(function () {
    console.log("Hey!");
});
*/

// Higher Order Function: A func that takes one or more funcs as a argument and returns a function as its result.

// Another way of HOF:
/*
function abcd() {
    return function () {
        console.log("Hey! You bitch");
    }
}

abcd()();  // 1st bracket to call abcd(), 2nd bracket to call the inner function in return.
*/

// Pure functions & Impure functions:

// pure: Always return the same output as given the same input parameters. No inner states change here.
// impure: Can change or modify the state & do affect other parts of the code.

/*
function func(cnt) {   // pure func because its not change any state here
    return cnt;
}

let ans = func(17);
console.log(ans);
*/

/*
function func(cnt) {   // impure func because its change the state of the cnt variable
    return ++cnt;
}

let ans = func(17);
console.log(ans);
*/

// Closure Function: A function which return another function, in the inner function its use any variables from outer functions.
// inner() remembers the variable a from its parent scope even after outer() finishes

/*
function outer() {
    let a = 12;
    return function inner() {
        console.log(a);
    }
}

outer()();
*/

// Lexical Scoping:
/*
function abcd() {
    let a = 11;
    function efgh() {
        let b = 111;
        function ijkl() {
            let c = 1111;
        }
    }
}
*/
/*
in this code, abcd() is the outer function, efgh() and ijkl() is the inner function. We can use 'a' in abcd(), efgh(), ijkl(), but we
can't use 'b' in abcd() and ijkl(), also we can't use 'c' in abcd(), efgh(). Thats is the lexical scoping. A block's code or variable
only use in that block.
*/

// Hoisting Function:
/*
abcd();

function abcd(){

}
*/
/*
abcd();

let abcd = function (){

}
*/
// 2nd one will not work because of hoisting not work in function expression.

// Q: Use rest parameter to accept any number of scores and return the total.

/*
function score(...scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    console.log(sum);
}
score(10, 11, 12, 4, 1, 4, 3, 1, 2);
*/

// Another approach:
/*
function score(...scores) {
    let tot = 0;
    scores.forEach(function (val) {
        tot += val;
    });
    return tot;
}
console.log(score(10, 11, 12, 4, 1, 4, 3, 1, 2));
*/

// Early return example:
/*
function checkAge(age) {
    if (age < 18) return "Too Young";
    return "Allowed";
}

console.log(checkAge(15));
console.log(checkAge(23));
*/

// Pass a function into another function and execute it inside:
/*
function abcd(val) {  // val here argument but as a function, its like a high order function
    val();
}

abcd(function () {
    console.log("Avicious!");
});
*/

// Closure function example:
/*
function outer() {
    let cnt = 0;
    return function () {
        cnt++;
        console.log(cnt);
    }
}

const counter = outer();  // here counter will store the inner function of outer
counter();   // cnt = 1
counter();   // cnt = 2
*/

// IIFE: Immediate Invoked Function Expression
// structure:
/*
(function (){

})();
*/
/*
(function () {
    console.log("This is Immediately!");
})();
*/
// USes for creating private variable.

// Task 1: Write a BMI calculator:
/*
function bmi(weight, height) {
    return (weight / (height * height));
}

console.log(bmi(71, 1.6).toFixed(4));
*/

// Task 2: Create a reusable discount calculator
/*
function disCalc(discount) {      // HOF (High order func)
    return function (price) {
        return price - price * (discount / 100);
    }
}

let ten = disCalc(10);     // it will take the inner function
let twenty = disCalc(20);  // it will also take the inner function

// inner func ke easy usable kore dibe ten() & twenty()
console.log(ten(200));   // just price te dibo aar eta 10% discount kore dibe
console.log(twenty(1600));    // given price er 20% discount
*/

// Task 3: Create a pure function to transform a value
/*
function double(val) {
    return 2 * val;
}

console.log(double(15));
*/

// Task 4: Use IIFE to isolate variable
/*
(function () {
    const password = "secret pass";
    console.log(password);   // given "secret pass"
})();

console.log(password);  // given error, this is now private variable can't use in global
*/

// Arrays:
/*
let arr = [10, 93, 67, 17, 45, 98];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[5]);
*/

// Modify Array:
/*
let a = [1, 2, 3, 4, 5];

a[3] = 12;
console.log(a);
*/

// Array Methods: (same as built-in function for c++ but here 'A func that belongs to a specific class or object')
/*
let arr = [1, 2, 3, 4, 5];

arr.push(100);
console.log(arr);

arr.pop();   // remove the last ele from arr
console.log(arr);

arr.shift();   // remove from the first ele of arr
console.log(arr);

arr.unshift(10);   // add from the first in arr
console.log(arr);

arr.splice(2, 1);  // remove ele from the middle of the arr,  splice(start_position_to_removing, how_many_ele_will_remove)
console.log(arr);

let newarr = arr.slice(0, 2);  // copy main array's ele to a new array; slice(start_position_of_copying, ending_position_of_copying-1)
console.log(newarr);
console.log(arr);    // it doesn't change the main array

// slice makes a copy of main array while splice change the main array.

arr.reverse();
console.log(arr);

// sort e always function deya laage, (a-b) dile ascending order, (b-a) dile descending order (its not just about a & b, it can be anything)
let asc = arr.sort(function (a, b) {  // ascending order
    return a - b;
});
console.log(asc);

let desc = arr.sort(function (a, b) {   // descending order
    return b - a;
});
console.log(desc);
*/






