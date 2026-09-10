// // Task 1

// let name = "dinesh"
// let dept = "ECE"
// let sub = [99,98,100,99,100]

// let tot =0;
// let avg;

// for(let a of sub){
//     tot=tot+a;
// }
// avg= tot/sub.length;

// let grade;
// if(avg>=90){
//     grade="A"
// }else if(avg>=75 && avg<=89){
//     grade ="B"
// }else if(avg>=60 && avg<=74){
//     grade = "C"
// }else if(avg>=50 && avg<=59){
//     grade ="D"
// }else{
//     grade="Fail"
// }
// console.log(tot)
// console.log(avg)
// console.log(grade)



// Task 2

// let emp={
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// }
// let bonus;

// function calculateSalary(e)
// {
//     if(e.experience>=2 && e.experience<=4){
//         bonus=10/100;
//     }else if(e.experience>=5){
//         bonus=15/100;
//     }else{
//         console.log("Not Eligible for bonus")
//     }
// }

// calculateSalary(emp);
// let basic=(bonus*emp.salary)+emp.salary;
// console.log(basic);




// Task 3



// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];


// let ans=products.filter( (c,i,t) =>{
//     if(c.price>=2000){
//         return c;
//     }
// })
// console.log(ans)
// let ans1=products.map( (c,i,t) =>{
//     return c.category;
// })

// console.log(ans1)

// let ans3= products.find((c,i,t)=>{
//     return c.price<=1000;
// })
// console.log(ans3)

// let ans4=products.reduce((ac,c,i,t)=>{
//     return c.price+ac;
// },0)
// console.log(ans4)

// let ans5=products.map((c,i,t)=>{
//     return c.price>=50000;
// })
// console.log(ans5)

// let ans6=products.map((c,i,t)=>{
//     return c.price<500;
// })
// console.log(ans6)




// Task 4

// let emp=[
//     {
//     id: 101,
//     name: "Kavin",
//     role: "Frontend Developer",
//     salary: 40000
// },
// {
//     id: 102,
//     name: "Dinesh",
//     role: "Java Developer",
//     salary: 50000
// },
// {
//     id: 103,
//     name: "Priya",
//     role: "Frontend Developer",
//     salary: 10000
// },
// {
//     id: 104,
//     name: "Pranesh",
//     role: "AI Developer",
//     salary: 40000
// },
// {
//     id: 105,
//     name: "Pandian",
//     role: "Fullstack Developer",
//     salary: 90000
// },
// {
//     id: 106,
//     name: "Kavitha",
//     role: "Dotnet Developer",
//     salary: 40000
// }
// ]
// console.log(emp)
// for(let a of emp)
// {
//     console.log(a)
// }

// let ans=emp.filter((c,i,t)=>{
//     return c.salary>=40000;
// })
// console.log(ans)

// let ans1=emp.find((c,i,t)=>{
//     return c.id==103;
// })
// console.log(ans1)

// let ans2=emp.reduce((a,c,i,t)=>{
//     return a+c.salary
// },0)
// console.log(ans2)


// let high=emp.reduce((max,c,i,t)=>{
//     if(c.salary>max){
//         max=c.salary;
//     }
//     return max;
// },0)

// // console.log(high)

// let ans3=emp.find((c)=>{
//     if(c.salary==high)
//     {
//         return c
//     }
// })
// console.log(ans3)

// let ans4=emp.sort((a,b)=>{
//     return a.salary-b.salary;
// })

// console.log(ans4)


// let nam=emp.map((c)=>{
//     return c.name;
// })
// console.log(nam)





// Task 5


// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];



// console.log(cart.length)
// function calculateCart(b){
//     let tot=cart.reduce((a,c)=>{
//     return a+(c.price*c.quantity);
// },0)
// console.log(tot)
// if(tot>=50000){
//     console.log("Amount is :",tot-(tot*(10/100)))
// }


// }
// calculateCart(cart);




// Task 6


// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];


// let nam=students.map((c)=>{
//     return c.name
// })
// console.log(nam)



// let ans=students.filter((c,i,t)=>{
//     return c.mark>=80
// })
// console.log(ans)


// let ans1=students.find((c,i,t)=>{
//     return c.name=="Priya"
// })
// console.log(ans1)

// let ans2=students.map((c,i,t)=>{
//     return c.mark<35;
// })
// console.log(ans2)

// let ans3=students.every((c,i,t)=>{
//     return c.mark>40;
// })
// if(ans3){
//     console.log("Yes")
// }else{
//     console.log("no")
// }

// let ans4=students.sort((a,b)=>{
//     return a.mark-b.mark;
// })

// console.log(ans4)



// Task 7

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// let ans=numbers.map((c)=>{
//     return c*2;
// })
// console.log(ans)


// let ans1=numbers.filter((c)=>{
//     return c%2==0;
// })
// console.log(ans1)

// let ans2=numbers.filter((c)=>{
//     return c>=15;
// })
// console.log(ans2)

// let ans3=numbers.find((c)=>{
//     return c>20;
// })
// console.log(ans3)

// let ans4=numbers.reduce((sum,c,i,t)=>{
//     return c+sum;
// },0)
// console.log(ans4)

// let ans5=numbers.filter((c)=>{
//     return c> 40;
// })
// console.log(ans5);

// let ans6=numbers.map((c)=>{
//     return c>=0;
// })

// if(ans6){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }


// let ans7 = numbers.sort((a,b)=>{
//     return b-a;
// })
// console.log(ans7)
 




// Task 8


// let temp = "JavaScript is very powerful"

// console.log(temp.length)

// console.log(temp.toUpperCase())

// console.log(temp.toLowerCase())

// console.log(temp.includes("JavaScript"))

// console.log(temp.charAt(0))
// console.log(temp.charAt(temp.length-1))

// let word=temp.split(" ")
// console.log(word.length)

// console.log(temp.replace("JavaScript","python"))

// let w=temp.split(" ")
// console.log(w)





// Task 9 final mini task



let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

console.log(employees);

let search="Priya"
let ans=employees.filter((c)=>{
    if(c.name==search){
        return c
    }
})
console.log(ans)

let dept="IT"
let ans1 = employees.filter((c)=>{
    return c.department=="IT"
})
console.log(ans1)

let ans2=employees.filter((c)=>{
    return c.salary>=50000;
})
console.log(ans2)

let tot=employees.reduce((a,c)=>{
    return c.salary+a
},0)
console.log(tot)


let high=employees.reduce((max,c)=>{
    if(c.salary>max){
        return c.salary;
    }
    return max
},0)
let ans3=employees.filter((c)=>{
    return c.salary==high;
})
console.log(ans3)

let ans4=employees.filter((c)=>{
    return c.experience>=3;
})
console.log(ans3)

let ans5=employees.sort((a,b)=>{
    return a.salary-b.salary
})
console.log(ans5)

let ans6=employees.sort((a,b)=>{
    return b.salary-a.salary
})
console.log(ans5)



let temp=employees.map((c)=>{
    return c.name
})
let totEmp=temp.length;
console.log("No of Employees:",totEmp)
console.log("Total Salary:",tot)
console.log("Highest Salary:",high)
console.log("Average salary:",tot/totEmp)




