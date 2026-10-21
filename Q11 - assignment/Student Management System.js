const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"college"
})

db.connect((err)=>{
    if(err){
        throw err
    }
    console.log("Connected...");
    
})

function insertStudent(name, age, course, email) {
    const sql = "INSERT INTO students(name, age, course, email) VALUES (?, ?, ?, ?)";
        db.query(sql, [name, age, course, email], (err,result)=>{
            if (err) {
                throw err
            } else {
                console.log("Student inserted successfully. ID:", result.insertId);
            }
        })
}
insertStudent("Tom", 21, "Database", "Tom@xyz");

function displayStudent() {
    const sql = "select* from students";
        db.query(sql, (err,result)=>{
            if (err) {
                throw err
            } else {
                console.log(result);
            }
        })
}
displayStudent();

function updateStudent(name, age, course, email, id) {
    const sql = "update students set name =?, age=?, course=?, email=? where id=?";
        db.query(sql, [name, age, course, email,id], (err)=>{
            if (err) {
                throw err
            } else {
                console.log("Student details updated!");
            }
        })
}
updateStudent("Jerry", 25, "IT", "jerry@xyz", 2);

function searchStudentID(id) {
    const sql = "select * from students where id=?";
        db.query(sql, [id], (err,result)=>{
            if (err) {
                throw err
            } else {
                console.log(result);
            }
        })
}
searchStudentID(3);

function searchStudentName(name) {
    const sql = "select * from students where name like?";
        db.query(sql, [`${name}`], (err,result)=>{
            if (err) {
                throw err
            } else {
                console.log(result);
            }
        })
}
searchStudentName("J");

function deleteStudentID(id) {
    const sql = "delete from students where id=?";
        db.query(sql, [id], (err)=>{
            if (err) {
                throw err
            } else {
                console.log("data deleted");
            }
        })
}
deleteStudentID(1);
displayStudent();