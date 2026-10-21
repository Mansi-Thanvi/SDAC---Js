//Q1
let numbers = [10, 20, 30, 40, 50, 60];
const [first, second, third, fourth, ...all] = numbers
console.log(first, second, fourth);

//Q2
let student = {
    name: "Rahul",
    age: 21,
    city: "Mumbai"
};

const {name, age, city: studentCity, course= "Unknown"} = student
console.log(studentCity, course);

//Q3
let numbers2 = [2, 5, 8, 10, 15, 20];

//map
const square = numbers2.map((i)=>{
    return i*i
})
console.log(square);

//filter
let g = numbers2[0]
const great = numbers2.filter((i)=>{
    for (let j = 0; j < numbers2.length; j++) {
        if (numbers2[j]>g) {
            g = numbers2[j];
        }
    }
})
console.log(g);

//reduce
const sum = numbers2.reduce((i, total)=>{
    return i+total
})
console.log(sum);

//Q4
let students2 = [
    { name: "Amit", marks: 75 },
    { name: "Priya", marks: 90 },
    { name: "Rahul", marks: 45 },
    { name: "Sneha", marks: 80 } 
];

//filter
const score60 = students2.filter((i)=>{
    return i.marks >60;
})
console.log(score60);

//map
const studNames = students2.map((i)=>{
    return i.name;
})
console.log(studNames);

//reduce
const totalMarks = students2.reduce((i, total)=>{
    return i.marks + total;
})

const avg = totalMarks/students2.length

console.log(avg);

//Q5
class BankAccount{
    accountHolder = "Tom";
    balance = 20000;
    deposit(amount){
        console.log("Amount Deposited");
        this.balance = this.balance + amount;
    }
    withdraw(amount){
        if (this.balance > amount) {
            console.log("Amount withdrawn");
            this.balance = this.balance-amount;
        }
    }
    checkBalance(){
        console.log("Balance: "+ this.balance);
        
    }
}
const b = new BankAccount()
b.deposit(20000);
b.withdraw(2000);
b.checkBalance();

//Q6
class Person{
    constructor(name = "Tom", age  = 25){
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person{
    constructor( employeeId = 12, salary = 25000){
        super();
        this.employeeId = employeeId;
        this.salary = salary;
    }

    display(){
        console.log("name: "+ this.name);
        console.log("age: "+ this.age);
        console.log("EmpID: "+ this.employeeId);
        console.log("Salary: "+ this.salary);
    }
}
const p = new Employee()
p.display();

//Q7
class InvalidAgeError extends Error {
    constructor(message) {
        super(message)
        this.name = "InvalidAgeError"
    }
}
function checkAge(age) {
    try {
        if (age<18) {
            throw new InvalidAgeError("Age is less than 18");
        } else {
            console.log("Valid age.");
            
        }
    } catch (error) {
        console.log(error.name + error.message);
    }
}
checkAge(5)
checkAge(19)

//Q8
class InvalidAmountError extends Error {
    constructor(message) {
        super(message)
        this.name = "InvalidAmountError"
    }
}
class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message)
        this.name = "InsufficientBalanceError"
    }
}
let balance = 5000;

function withdraw(amount) {
    try {
        if (amount <= 0) {
        throw new InvalidAmountError("Withdrawal amount must be a positive number.");
    }
    
    if (amount > balance) {
        throw new InsufficientBalanceError("Insufficient balance!");
    }

    balance -= amount;
    console.log("Withdrawal successful!");
    console.log("Remaining balance:", balance);
    } catch (error) {
        console.log(error.name + error.message);
    }
}

withdraw(-6000);
withdraw(6000);
withdraw(2000);

//Q9
function Task(process) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            if(process){
            resolve("Task Completed!")
        }
        else{
            reject("Task Failed!")
        }
        }, 2000);
    }
    )
}
async function test() {
    try {
        const displaying = await Task(true)
        console.log(displaying);
    } catch (error) {
        console.log(error);
    }
}
test()

//Q10
function checkNumber(num) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            if(num >=1){
            resolve("Positive number")
        }
        else{
            reject("Invalid number")
        }
        }, 2000);
    }
    )
}
async function test2() {
    try {
        const displaying = await checkNumber(5)
        const displaying2 = await checkNumber(-5)
        console.log(displaying);
        console.log(displaying2);
    } catch (error) {
        console.log(error);
    }
}
test2()

//Q11 -> go to Student Management System.js

//Q12

function checkNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

checkNumber2()
    .then((num) => {
        return num * 2;       
    })
    .then((result) => {
        return result + 5;    
    })
    .then((finalResult) => {
        console.log(finalResult);  
    })
    .catch((error) => {
        console.log("Error:", error);
    });

//Q13 -> Q13 -assignment folder

//Q14 -> Q14 -assignment folder
//Q15 -> Q15 -assignment folder