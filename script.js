function addStudent(){
    let name = document.getElementById("name").value;
    let roll= document.getElementById("roll").value;
    if(name === "" || roll ===""){
        alert("enter all details");
        return;
    }
    let li = document.createElement("li");
    li.textContent = "Name: " + name +", roll No: " +roll;
    document.getElementById("list").appendChild(li);

    document.getElementById("name").value="";
    document.getElementById("roll").value ="";
}
function searchStudent() {
    let roll = prompt("Enter roll number");
    let students = document.querySelectorAll("#list li");
    let found = false;

    students.forEach(student => {
        if (student.textContent.includes(roll)) {
            alert(student.textContent);
            found = true;
        }
    });

    if (!found) alert("Student not found");
}

