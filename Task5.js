// 1.

// var- we can reuse and reinitialize,redeclaration
// let- reinialization and reuse is possible but redeclarelation is not possible
// const- single time declaration and iniatilization.


// 2

//Yes we can redeclare var but can't redeclare let and const.


// 3

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);

//There is a error because we reinitialize const z which is not possible.

// 4

// let a; //Declaring the variable

// a=10; // initializing the variable like assinging the value


// 5

// let a;
// console.log(a); // undefined.


// 6

// Hoisting means accesing the variable first, and then declaring the variable is known as hoisting.
// which may lead to reference error for let and const type and undefined error for var type.
// console.log(a)
// let a=10



// 7 

// Null means assigning the value null which means 0 or false
// undefined means not assigning the value for variable


// 8

// console.log(typeof null); //object
// console.log(typeof undefined); // undefined
// console.log(typeof []);// object
// console.log(typeof {}); // object 


// 9

// == -> its loosly equal check the only both side values and not data type
// ===  -> its strictly equal check both value and datatypes.


// 10
//++i -> pre increement its increement its value by 1
//i++ ->post increement its increement its value by 1



//11

// let x = 10;
// let y = "5";
// console.log(x + y); // concatinate 10 + 5= 105
// console.log(x - y); // 5
// console.log(x * y);// 50
// console.log(x / y);// 2



// 12

// AND -> &&  if any value false then o/p is false
// OR -> ||  if any value is true means then o/p is true
// NOT -> ! opposite of the the value



// // 13

// console.log(5 > 3 && 10 > 5); 
// //true && true
// // true
// console.log(5 > 10 || 10 > 5);
// // false || true
//  // true
// console.log(!(5 > 3));
// // !true
// // false



// 14

// condition ? stmt 1 : stmt 2;
//if condtion is true means stmt 1 will execute else stmt 2 is execute.



// 15

// explicit 
// using inbuild function it directly convert into another datatype


// implicit
// when one data type is concate into another datatype it totally convert into single datatype which has higher poriority



// 16

// console.log(Number("123")); //123
// console.log(Number("hello"));// Nan
// console.log(Number(true));// 1
// console.log(Number(false));// 0
// console.log(Boolean(0));// false
// console.log(Boolean("hello"));// true


// 17

// NaN ->  Not a Number
//if try to string into number it shows NaN

// console.log(Number("ASD"))



// 18

// if(true)
// {
//     console.log("stmt 1")
// }else{
//     console.log("stmt 2")
// }

// let a= 10
// switch(a){
//     case 5: console.log("Key 5 found");break;
//     case 10: console.log("key 10 found") ; break;
//     default : console.log("No value found");break;
    
// }




// 19

// let age = 20;
// if(age >= 18) {
//     console.log("Adult"); // Adult
// } else {
//     console.log("Minor");
// }



// 20


// nested if means one if contain another if condition
//  let age =19;
//  let check =true

//  if (age>=18){
//     if (check==true){
//         console.log("You are eligible")
//     }else{
//         console.log("check is failed")
//     }
//  }else{
//     console.log("Age is less than 18")
//  }


//21

// let a=10;

// (a%2==0) ? console.log("Even") : console.log("odd")



// 22
// let a=2;
// // while(a<5){
// //     console.log(a)
// //     a++
// // }

// do{
//     console.log(a)
// }while(a<2)



// 23


// for(let i = 1; i <= 5; i++) {
//     console.log(i);  // 1 2 3 4 5
// }


// 24 
// let arr=[1,2,3,4]
// for(let a of  arr)
// {
//     console.log(a)
// }

let obj={
    name :"dinesh",
    age : 22,
    city :"Madurai"

}

// for(let a in obj)
// {
//     console.log(a)
// }

// 25

// let sum=0;
// for (let i=1;i<=100;i++){
//     sum=i+sum;
// }
// console.log(sum)




// 26

//slice -> its slice down specific part which we giving statring and ending index

// splice -> its replace those seleted specific part using starting index and ending index


// 27

// let arr = [1, 2, 3];
// arr.push(4); // 1 2 3 4
// arr.pop();// 1 2 3
// arr.unshift(0);// 0 1 2 3
// arr.shift(); // 1 2 3
// console.log(arr); // 1 2 3


// 28

// function declaration

// function demo(a){
//     console.log(a)
// }
// demo(10);



//function expression

// let demo=function(a){
//     console.log(a);
// }
// demo(10)


// 29


//Arrow function 
// Arrow function is used to reduce memory space without using function inbuild code.

// let demo = (a)=>{
//     console.log(a)
// }
// demo(10)


// 30

// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message); // Hello