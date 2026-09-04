// Task 1

// for(let a=1;a<=10;a++){
//     console.log(a)
// }


// Task 2

// for(let a=10;a>0;a--){
//     console.log(a)
// }


// Task 3

// for(let a=1;a<=20;a++)
// {
//     if(a%2==0){
//         console.log(a)
//     }
// }


// Task 4

//  for(let a=1;a<=20;a++)
// {
//     if(a%2!=0){
//         console.log(a)
//     }
// }


// Task 5


// let num =prompt("Enter the number")

// for(let n=1;n<=10;n++){
//     console.log(num*n)
// }



// Task 6


// let n=10;
// while(n>0){
//     console.log(n);
//     n--;
// }

// Task 7 

// let n=10;
// let sum =0;
// while(n>0){
//     sum+=n;
//     n--;
// }
// console.log(sum)



// Task 8

// let n=1;
// do{
//     console.log(n)
//     n++;
// }while(n<=5)


// Task 9

// let a = 10;

// do {
//     console.log(a);
//     a++;
// } while (a <= 5);

//As it is a do while loop,first its start to run the code and then it check for condition.



// Task 10

// let name = "javascript";

// for(let a of name){
//     console.log(a)
// }



//Task 11

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// for(let a of fruits){
//     console.log(a)
// }


//Task 12

// var student=["Dinesh","Priya","Pranesh","Pandian","Kavitha"]

// for(var a of student){
//     console.log("Student:",a)
// }


// Task 13

// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };

// for(let a in employee){
//     console.log(a,employee[a])
// }


// Task 14

// let product ={
//     productName: "iphone 15",
//     price : 50000,
//     brand: "Apple",
//     category : "smartphone",
//     stock : "US Stock"
// }

// for(let a in product){
//     console.log(a,product[a])
// }



// Task 15

// function welcome(){
//     console.log("Weolcome to Javascript")
// }
// welcome();


// Task 16


// function greet(name) {
//     console.log(`Hello ${name}`)
// }
// greet("Naveen");
// greet("Dinesh");
// greet("Priya");


// Task 17

// function student(name, age, department){
//     console.log(name,age,department)
// }

// student("Dinesh",22,"ECE")
// student("Priya",23,"ECE")
// student("Pranesh",20,"CSE")



// Task 18

// function add(a,b){
//     return a+b;
// }

// let result= add(10,20)
// console.log(result)



// Task 19

// function salary(amount) {
//     return amount;
// }

// let result=salary(100000)
// console.log(result)




// Task 20

// function bonus(salary,bonusAmount){
//     return salary+bonusAmount;
// }

// let sal= 100000;
// let bon= 200000;

// let tot=bonus(sal,bon)
// console.log("Total",tot)



// Task 21

// function employee(name, role = "Developer") {
//     console.log(name , role)
// }

// employee("Dinesh"); // Defaultly take role as Developer if we don't give role input
// employee("Priya", "Designer");



// Task 22

// function square(number) {
//     return number * number;
// }

// let a=square(2)
// console.log(a)
// let b=square(3)
// console.log(b)
// let c=square(4)
// console.log(c)
// let d=square(5)
// console.log(d)
// let e=square(6)
// console.log(e)



// Task 23

// let cal=function(a,b){
//     return a+b;
// }

// console.log(cal(5,6))


// Task 24

// let mul=(a,b) => {
//     return a*b;
// }

// console.log(mul(4,5))


// Task 25

// function test() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a); // 10
//         console.log(b);// 20
//         console.log(c);// 30
//     }

//     console.log(a);// 10
//     console.log(b);//As b is let datatypes works only inside the block so it will not print.
//     console.log(c);// As c is const datatypes works only inside the block so it will not print.
// }

// test();


// Task 26


// console.log(a); // As var is global variable its output is undefined.
// var a = 10;



// Task 27


// console.log(b);// reference error because its a block level datatype
// let b = 20;


// Task 28
// console.log(c);// reference error because its a block level datatype
// const c = 30;



// Task 29
// (function() {
//     console.log("Welcome to javascript")
// })()

// (function(prod,dis){
//     console.log(`Super delux ${prod} is in ${dis}%.`)
// })("Smart TV",50)


// Task 30

// function welcome() {
//     console.log("Welcome");
// }

// function execute(callback) {
//     callback();
// }

// execute(welcome);




// Task 31

// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// let cash= cashback()

// // for(let a of cash){
// //     console.log(a)
// // }

// console.log(cash.next().value)
// console.log(cash.next().value)
// console.log(cash.next().value)
// console.log(cash.next().value)
// if(cash.next().done){
//     console.log("All value done")
// }



//Task 32
// Employee management system


// let employees = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 40000
//     },
//     {
//         name: "Priya",
//         age: 24,
//         department: "HR",
//         role: "HR Executive",
//         salary: 35000
//     }
// ];


// 1

// for(let a of employees)
// {
//     console.log(a)
// }


// 2

// for(let b in employees){
//     console.log(employees[b])
// }


//3

// function emp(){
//     console.log(employees)
// }
// emp()


//4

// function emp(temp){
//     console.log(temp)
// }
// emp(employees)

//5
//  function emp(temp){
//     return temp
// }
// let a=emp(employees)
// console.log(a)

//6
// for(let a in employees){
//     if (employees[a].salary>=40000){
//         console.log(employees[a])
//     }
// }


//7

// let arrow =(temp)=>{
//     return temp
// }

// let ans = arrow(employees)
// console.log(ans)


// //8
// function* empBenefits(){
//     yield "Medical Insurance"
//     yield "Transport"
//     yield "Food Allowance"
//     yield "Bonus"
// };

// let benefit=empBenefits()

// console.log(benefit.next())
// console.log(benefit.next().value)
// console.log(benefit.next())
// console.log(benefit.next().value)
// console.log(benefit.next())
// if (benefit.next().done){
//     console.log("All value is done")
// }



