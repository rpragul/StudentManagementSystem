

let addStudentButton = document.getElementById("addStudentButton");


function addStudentDetails(event) {

    event.preventDefault();
    
    let sName = document.getElementById("sName").value;
    let sRegisterNo = document.getElementById("sRegisterNo").value;
    let sDateOfBirth = document.getElementById("sDateOfBirth").value;

    let studentDetailsArray = JSON.parse(localStorage.getItem("studentDetailsArray")) || [];

    const studentDetailsObject = {
        sName: sName,
        sRegisterNo: sRegisterNo,
        sDateOfBirth: sDateOfBirth
    };

    studentDetailsArray.push(studentDetailsObject);

    localStorage.setItem("studentDetailsArray", JSON.stringify(studentDetailsArray));

    console.log(studentDetailsArray);


}


