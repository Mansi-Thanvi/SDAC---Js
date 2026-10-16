//Q15
import { add, subtract, multiply, divide } from "./calculator.js";

//Q1
class BankAccount{
    accountNumber = 4545545;
    accountHolder = "Mansi";
    balance = "10000000";
    deposit(amt){
        console.log(amt + "Rs is deposited");
    }
    withdraw(amt){
        console.log(amt + "Rs is withdrawn");
    }
}
const b = new BankAccount();
console.log(b);
b.deposit(10000);
b.withdraw(20000);


//Q2
const arr = [2,4,6,8,12]
const [one, two] = arr
console.log(one, two);

//Q3
const Emps = {
    "id":12,
    "name": "Tom",
    "salary": 20000
}
const {id, name, salary} = Emps
console.log(id);
console.log(name);
console.log(salary);

//Q4
const arr1 = [20, 3, 5, 1]
console.log(arr1);

function findMax() {
    return Math.max(...arr1)
}
console.log(findMax());


//Q5
function greet(name = "Guest") {
    console.log(name);
}
greet()

//Q6
function addQ5(a, b = 10) {
    console.log(a + b);
}
addQ5(2)

//Q7
try {
    console.log(i);
    
} catch (error) {
    console.log(error.name+ " : " + error.message);
}

//Q8 and Q9
function validateAge(age) {
    try {
        if (age<18) {
            throw new Error("Age is less than 18");
        } else {
            console.log("Valid age.");
            
        }
    } catch (error) {
        console.log(error.message);
    }
}
validateAge(5)
validateAge(19)

//Q10
function add1(a, b) {
    try {
        if(b<=0){
            throw new Error("Cannot be 0 or less than 0");
        }
        else{
            console.log(a + b);
        }
    } catch (error) {
        console.log(error.message);
    }
}
add1(2,0)
add1(0,12)

//Q11
class InvalidSalaryError extends Error{
    constructor(msg){
        super(msg)
        this.name = "InvalidSalaryError"
    }
}
function EmpSal(sal) {
    try {
        if (sal<=0) {
            throw new InvalidSalaryError("salary cannot be 0 or less than 0");
        } else {
            console.log(sal + "Rs is deposited into employee's account");
        }
    } catch (error) {
        console.log(error.name+ " : " + error.message);
    }
}
EmpSal(-20000)
EmpSal(20000)

//Q12
class InvalidUsernameError extends Error{
    constructor(msg){
        super(msg)
        this.name = "InvalidUsernameError"
    }
}
function Username(uname) {
    try {
        if (uname == null ) {
            throw new InvalidUsernameError("Username cannot be null");
        } else {
            console.log("welcome! " + uname);
        }
    } catch (error) {
        console.log(error.name+ " : " + error.message);
    }
}
Username()
Username("tom")

//Q13
function first() {
    
        const a = 10;
    console.log(a);
    a = 20;
    
    
}
function second() {
    first()
}
function third() {
    try {
        second()
    } catch (error) {
        console.log(error.name+ " : " + error.message);
    }
}
third();

//Q14
function validateAges(UserAge) {
    try {
        if (UserAge<18) {
        throw new Error("You cannot Register!");
        
    } else {
        console.log("Allowed to register!");
        
    }
    } catch (error) {
        console.log( error.message);
    }
}
function registerUser(UserAge) {
    validateAge(UserAge)
}
registerUser(12)
registerUser(20)

//Q15
add(2, 10)
subtract(20, 10)
multiply(2, 10)
divide(10, 2)

//Q17 and Q18
function Task(process) {
    return new Promise((resolve,reject)=>
    {
        if(process){
            resolve("Task Completed!")
        }
        else{
            reject("Task Failed!")
        }
    }
    )
}
Task(true) .then((result)=>{
    console.log(result); 
}
)
.catch((e)=>{
    console.log(e);
}
)
Task(false) .then((result)=>{
    console.log(result); 
}
)
.catch((e)=>{
    console.log(e);
}
)

//Q19
function Task2(process) {
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
        const displaying = await Task2(true)
        console.log(displaying);
    } catch (error) {
        console.log(error);
    }
}
test()

//Q20
function userData() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) =>{
        return Response.json()
    }
    )
    .then((data) =>{
        console.log(data);
    }
    )
    .catch((error)=>{
        console.log(error.name + " : " + error.message);
    }
    )
}
userData()