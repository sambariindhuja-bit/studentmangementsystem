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
function registerStudent() {
    let name = prompt("Enter student name");
    let roll = prompt("Enter roll number");

    if (name && roll) {
        let li = document.createElement("li");
        li.textContent = "Name: " + name + ", Roll No: " + roll;
        document.getElementById("list").appendChild(li);
    }
}
