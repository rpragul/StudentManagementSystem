
const getStudentDetailsFromStorage = JSON.parse(localStorage.getItem("studentDetailsArray"));



for (let i = 0; i < getStudentDetailsFromStorage.length; i++) {
    console.log(getStudentDetailsFromStorage[i].sName);
}

window.onload = function () {
    displayStudentDetails();
};

function displayStudentDetails() {
    let displayStudentDetails = document.getElementById("displayStudentDetails");


    for (let i = 0; i < getStudentDetailsFromStorage.length; i++) {

        let row = document.createElement("div");
        row.className = "row";

        let col1 = document.createElement("div");
        col1.id = "sName";
        col1.className = "col";
        col1.textContent = `${getStudentDetailsFromStorage[i].sName}`;

        let col2 = document.createElement("div");
        col2.id = "sRegisterNo";
        col2.className = "col";
        col2.textContent = `${getStudentDetailsFromStorage[i].sRegisterNo}`;

        let col3 = document.createElement("div");
        col3.id = "sDateOFBirth";
        col3.className = "col";
        col3.textContent = `${getStudentDetailsFromStorage[i].sDateOfBirth}`;

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);

        displayStudentDetails.appendChild(row);
    }
}
