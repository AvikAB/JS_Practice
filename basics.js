// variables: (var, let, const)
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

// For-each loop:  it accepts the function to print.
/*
let arr = [11, 62, 17, 29, 5];

arr.forEach(function (val) {
    console.log(val);
});
console.log('\n');
arr.forEach(function (val) {
    console.log(val + 5);
});
*/

// Map: helps to create the new array
/*
let arr = [11, 62, 9, 17, 29, 5];

let newarr = arr.map(function (val) {
    return;
});
console.log(newarr);  // undefined for 5 length new array

let newarr2 = arr.map(function (val) {
    if (val > 10) return val;
});
console.log(newarr2)
*/

// Filter:
/*
let arr = [11, 62, 9, 17, 29, 5];

let newarr = arr.filter(function (val) {  // if val is >10 then pick it in newarr else not
    if (val > 10) return true;
});
console.log(newarr);
*/

// Reduce:
/*
let arr = [1, 2, 3, 4, 10];
let ans = arr.reduce(function (accumulator, val) {  // here, accumulator is a variable which will track its own val for reduce the arr, its initial val is 0, which is also initialize here
    return accumulator + val;
}, 0);
console.log(ans);
*/

// Find:
/*
let arr = [1, 2, 3, 4, 10];
let found = arr.find(function (val) {
    return val == 4;
});
console.log(found);
*/
/*
let arr = [{ id: 1, key: 10 }, { id: 2, key: 20 }, { id: 3, key: 30 }];
let ans = arr.find(function (val) {
    return val.key == 20;
});
console.log(ans);
*/

// Some: given ans on true/false.
/*
let arr = [89, 84, 23, 37, 8];
let ans = arr.some(function (val) {
    return val > 85;
});
console.log(ans);
*/

// Every:
/*
let arr = [10, 45, 30, 90];
let ans = arr.every(function (val) {
    //return val > 5;   // return true because all ele is >5
    return val > 15;   // return false because  10 is less than 15
});
console.log(ans);
*/

// Destructuring: unpack data into variables.
/*
let colors = ["red", "green", "yellow", "pink"];
let [first, second, fourth] = colors;

console.log(first);
console.log(second);
console.log(fourth);  // it will give "yellow" means its follow the order
*/
/*
let arr = [1, 2, 3, 4, 5];
let [a, b, d] = arr;
console.log(a, b, d);
*/

// Spread Operator: make a copy from the original (using ... [3 dots])
/*
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);
*/

// Array Questions:

// Q1: Create an array with 3 fruits & print the 2nd one?
/*
let arr = ["Apple", "Guava", "Banana"];
console.log(arr[1]);
*/

// Q2: Add mango in the end & pineapple at the beginning?
/*
let arr = ["Apple", "Guava", "Banana"];
arr.push("Mango");
arr.unshift("Pineapple");
console.log(arr);
*/

// Q3: [Apple, Banana] in array, pop banana and replace it with "Kiwi".
// Method 1
/*
let fruits = ["Apple", "Banana"];
fruits.pop();
fruits.push("Kiwi");
console.log(fruits);
*/

// Method 2:
/*
let fruits = ["Apple", "Banana"];
fruits[1] = "Kiwi";
console.log(fruits);
*/

// Q4: Remove the last item from this array using method.
/*
let arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);
*/

// Q5: Insert "Red", "Blue" at index 1 in this array:
/*
let arr = ["Green", "Yellow"];
arr.splice(1, 0, "Red", "Blue");   // {idx, how_many_ele_will_removed, adding_eles}
console.log(arr);
*/

// Q6: Extract only the middle 3 elements from the array: [1,2,3,4,5,6]
/*
let nums = [1, 2, 3, 4, 5, 6];
let newnums = nums.slice(1, 4);
console.log(newnums);
*/

// Q7: Sort the array alphabetically & reverse them.
/*
let names = ["Zara", "Arjun", "Mira", "Mukta", "Tahmina"];
names.sort().reverse();
console.log(names);
*/

// Q8: Use .map() to square each number:
/*
let nums = [1, 2, 3, 4];
let newnums = nums.map(function (val) {
    return val * val;
});
console.log(newnums);
*/

// Q9: Use .filter() to keep nums greater than 10:
/*
let arr = [5, 12, 8, 20, 3];
let newarr = arr.filter((val) => {
    return val > 10;
});
console.log(newarr);
*/

// Q10. Use .reduce() to find the sum of this array:
/*
let arr = [10, 20, 30];
let total = arr.reduce(function (sum, val) {
    return sum + val;
}, 0);
console.log(total);
*/

// Q11: Use .find() to get the first number less than 10:
/*
let arr = [12, 15, 3, 8, 10];
let neww = arr.find(function (val) {
    return val < 10;
});
console.log(neww);
*/

// Q12. Use .some() to check if any student has scored below 35:
/*
let arr = [45, 60, 28, 90];
let neww = arr.some(function (val) {
    return val < 35;
});
console.log(neww);
*/

// Q13. Use .every() to check if all nums are even:
/*
let arr = [2, 4, 6, 8, 10];
let neww = arr.every(function (val) {
    return val % 2 === 0;
});
console.log(neww);
*/

// Q14. Destructure this array to get firstName & lastName:
/*
let full = ["Avik", "Das"];
let [firstName, lastName] = full;
console.log(firstName);
console.log(lastName);
*/

// Q15. Merge two arrays using spread operator:
/*
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c);
*/

// Q16. Add "BD" to the start of this array using spread:
/*
let countries = ["USA", "UK"];
countries = ["BD", ...countries];
console.log(countries);
*/

// Q17. Clone this array properly (not by reference):
/*
let arr = [1, 2, 3];
let arr2 = [...arr];
console.log(arr2);
*/

// OBJECTS:
// used to keep details of an entity.
/*
let obj = {
    name: "avik",
    age: 25,
    food: "biriyani",
};

// can view the data using . (dot) & [].
console.log(obj.name);
console.log(obj['name']);
*/

// Why . and [] use here to view?  (Dot, bracket notation)
/*
let aa = "name";
obj.aa;
In that case, in the obj object its directly will find the aa. Its not convert aa to "name" and then find.
Means using .(dot), after . it will directly find that keyword to the obj.

obj[aa] will do this, it convert obj[aa] to obj["name"].
*/

// Key-value structure: in obj, name:"avik"; is known as key-val struture where name is key, "avik" is val.

// Nesting & Deep Access:
/*
const user = {   // here user is the obj & address, locations are nested obj of it
    name: "Avik",
    address: {
        city: "Rajshahi",
        pin: 1662,
        location: {
            lat: 23.2,
            lng: 71.17,
        },
    },
};
console.log(user.address.location.lng);
*/

// Object Destructuring: (uses in backend)
/*
const user = {
    name: "Avik",
    address: {
        city: "Rajshahi",
        pin: 1662,
        location: {
            lat: 23.2,
            lng: 71.17,
        },
    },
};
let { lat, lng } = user.address.location;
console.log(lat);
console.log(lng);
*/

//Looping: for-in, Object.keys(), Object.entries()
/*
let obj = {
    name: "avik",
    age: 24,
    email: "test@test.com",
}
*/
/*
for (let key in obj) {    // loop for object traversal 'for (let variable_name in object_name){};'
    console.log(key, obj[key]);   // {key, value}
}
*/
// Object.keys(object_name): when need to convert keys into an array.
// Object.entries(object_name): It gives array of arrays, given all data of it.
/*
console.log(Object.keys(obj));
console.log(Object.entries(obj));
*/

// Copying objects: spread, Obejct.assign, deep clone
// Spread: using {...old_object_name} just copy the object to another object. Known as shallow copy.
/*
let obj = {
    name: "avik",
    age: 24,
    email: "test@test.com",
}
let obj2 = { ...obj };
console.log(obj2);
*/

// Object.assign: Object.assign({}, object_name_which_gonna_copy); {} is blank obj, Put any data in blank obj, create key, val in the object. Not uses too much
/*
let obj = {
    name: "avik",
    age: 24,
    email: "test@test.com",
}
let obj2 = Object.assign({}, obj);
let obj3 = Object.assign({ price: Infinity }, obj);  // add price in the obj as the first entity
console.log(obj2);
console.log(obj3);
*/

// Deep Clone: Nested object thakle spread diye copy hoi na, pass by reference hoi. Kono change korle main object eo change hoye jai ei problem er jonnei use hoi deep clone.
/*
let obj = {
    name: "avik",
    age: 24,
    email: "test@test.com",
    address: {
        city: "Rajshahi",
    }
}
let obj2 = { ...obj };
obj2.address.city = "Dhaka";
console.log(obj2);
console.log(obj);       // obj's city also is changed
*/

/*
let obj = {
    name: "avik",
    age: 24,
    email: "test@test.com",
    address: {
        city: "Rajshahi",
    }
}
let obj2 = JSON.parse(JSON.stringify(obj)); // JSON.stringify obj ke string e convert korbe, tarpor abar setake real form e ante parse use korbe, ekahen copy hoi reference hoi na
console.log(obj2);   // its 'Rajshahi'
obj2.address.city = "Dhaka";
console.log(obj2);   // Now its 'Dhaka'
console.log(obj);    // obj remains same as 'Rajshahi'
*/

// Optional Chaining: object er majhe error handle korte use hoi.
/*
let obj = {
    name: "avik",
    age: 24,
    email: "test@test.com",
    addresses: {
        city: "Rajshahi",
    }
}
//console.log(obj.address.city);  // its given error because of typing mistake of 'addresses'
// Handle this issue using optional chaining.

console.log(obj?.adress?.city);  // undefined
// it doesn't given error it will give undefined. (obj?.adress?.city) means obj er moddhe adress name e kichu exist kore ki na, jodi kore thaole or moddhe thaka city jodi exist kore tahole ta print koro
console.log(obj?.addresses?.city);
*/

// Computed Properties: Object er baire variable ache, oi variable er value er naame ekta entity banate hobe object er vitore, ekhane help kore computed properties.
/*
let role = "admin";
let obj = {
    name: "avik",
    age: 24,
    email: "test@test.com",
    addresses: {
        city: "Rajshahi",
    },
    [role]: "avi",  // admin hobe 'avi', [var_name] = new_val
}
console.log(obj);
*/

// QUESTIONS:

// Q1: Create an object for a student with name, age & isEnrolled:
/*
let obj = {
    name: "avik",
    age: 24,
    isEnrolled: true,
}
console.log(obj);
*/

// Q2: Can an object key be a number or bool: YES
/*
let obj = {
    true: "yes",
    17: "answer",
}
console.log(obj[17]);
console.log(obj[true]);
*/

// Q3: Access the value of "first-name" from this object:
/*
const user = {
    "first-name": "avik",
};
console.log(user["first-name"]);   // we can't use user.first-name; here
*/

// Q4: Given a dynamic key let key="age", how you will access user[key]?
/*
let key = "age";
const user = {
    age: 26,
}
console.log(user[key]);
*/

// Q5: Destructure the city & lat from the location object above:
/*
let locations = {
    city: "Dhaka",
    coord: {
        lat: 23.3,
        lang: 77.6,
    },
}

let { city } = locations;
let { lat } = locations.coord;
console.log(city, lat);
*/

// Q6: Destucture the key "first-name" as a variable called firstName:
/*
const user = {
    "first-name": "avik",
}
let { "first-name": firstName } = user;
console.log(firstName);
*/

// Q7: Use Object.entries() to print all key-val pairs as:
/*
const course = {
    title: "JS",
    duration: "1 month",
}

Object.entries(course).forEach(function (val) {
    console.log(val[0] + ": " + val[1]);
});
*/

// Q8: Deep clone the obj1 safely: change the score=100 in clone obj
/*
const obj1 = {
    info: {
        score: 80,
    }
}

let newobj = JSON.parse(JSON.stringify(obj1));
newobj.info.score = 100;
console.log(newobj);
console.log(obj1)
*/


