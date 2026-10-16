class Employee{
    id = 12;
    name = "Tom";
    salary = 12000;
    display(){
        console.log("Id : "+ this.id);
        console.log("Name : "+ this.name);
        console.log("Salary : "+ this.salary);
    }
}
module.exports = {Employee}