



const studentAttendanceDetailsArray = JSON.parse(localStorage.getItem("studentAttendanceDetailsArray")) || [];
console.log(studentAttendanceDetailsArray);
const studentDetailsArray = JSON.parse(localStorage.getItem("studentDetailsArray"));
console.log(studentDetailsArray);


window.onload = function (event) {
    addAttendanceDetails(event);

};


function addAttendanceDetails(event) {
    // event.preventDefault();
    let mainContent = document.querySelector("#mainContent");

    for (let i = 0; i < studentDetailsArray.length; i++) {
        let row = document.createElement("div");
        row.className = "row";

        let col1 = document.createElement("div");
        col1.className = "col";
        col1.textContent = `${i + 1}`;

        let col2 = document.createElement('div');
        col2.className = "col";
        col2.textContent = `${studentDetailsArray[i].sName}`;

        let col3 = document.createElement("div");
        col3.className = "col";

        let button1 = document.createElement("button");
        button1.className = "col btn btn-success presentButton";
        button1.textContent = "Present";

        let button2 = document.createElement("button");
        button2.className = "col btn btn-danger absentButton";
        button2.textContent = "Absent";

        let col4 = document.createElement("div");
        col4.className = "col presentContent";
        col4.textContent = "0";

        let col5 = document.createElement("div");
        col5.className = "col absentContent";
        col5.textContent = "0";

        col3.appendChild(button1);
        col3.appendChild(button2);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);


        mainContent.appendChild(row);

        // present button click 



    }

    let presentButton = document.querySelectorAll(".presentButton");
    presentButton.forEach(function (present) {
        present.addEventListener("click", presentButtonClickFunction);

    });

    // absent button clicked

    let absentButton = document.querySelectorAll(".absentButton");
    absentButton.forEach(function (absent) {
        absent.addEventListener("click", absentButtonClickFunction);

    });
};


function presentButtonClickFunction(event) {
    // event.preventDefault();
    let presentContent = event.target.parentElement.parentElement.querySelector(".presentContent");
    let presentTextContent = parseInt(presentContent.textContent);
    console.log(presentTextContent);
    if (presentTextContent == 0) {
        console.log("true");
        presentTextContent += 1;
        presentContent.textContent = presentTextContent;
        console.log(presentTextContent);

        let preCountElement = document.getElementById("preCount");
        let increPreCount = parseInt(preCountElement.value);
        increPreCount++;
        preCountElement.value = increPreCount;
        console.log(increPreCount);
    };


    let hideAbsentButton = event.target.nextElementSibling;
    console.log(hideAbsentButton);
    hideAbsentButton.style.display = "none";

 
};

// absent button clicked function
function absentButtonClickFunction(event) {
    // event.preventDefault();

    let absentContent = event.target.parentElement.parentElement.querySelector(".absentContent");
    let absentTextContent = parseInt(absentContent.textContent);
    console.log(absentTextContent);

    if (absentTextContent == 0) {
        console.log("true");
        absentTextContent += 1;
        absentContent.textContent = absentTextContent;

        let absCountElement = document.getElementById("absCount");
        let increAbsCount = parseInt(absCountElement.value);
        increAbsCount++;
        absCountElement.value = increAbsCount;
        console.log(increAbsCount);
    };

    let hidePresentButton = event.target.previousElementSibling;
    console.log(hidePresentButton);
    hidePresentButton.style.display = "none";

    


};

function createAttendanceDetailsAsObject() {


    for (let i = 0; i < studentDetailsArray.length; i++) {
        const studentAttendanceDetailsObject = {
            attendanceDate: attendanceDate,
            studDetails: {
                sName: studentDetailsArray[i].sName,
                presentTextContent: parseInt(document.querySelectorAll(".presentContent")[i].textContent),
                absentTextContent: parseInt(document.querySelectorAll(".absentContent")[i].textContent)
            }

        };
        console.log(studentAttendanceDetailsObject.presentTextContent);
        studentAttendanceDetailsArray.push(studentAttendanceDetailsObject);
        console.log("object is created");

    };

    
};

// attendance date

let attendanceDate;  // Declare the variable outside the event listener

const getAttendanceDateElement = document.getElementById("attendanceDate");
getAttendanceDateElement.addEventListener("input", function () {
    attendanceDate = getAttendanceDateElement.value;
    console.log(attendanceDate);
});


// save button 

let saveFileButton = document.getElementById("saveFile");

saveFileButton.addEventListener("click", function () {
    createAttendanceDetailsAsObject();
    setToLocalStorage();
});


function setToLocalStorage() {
    localStorage.setItem("studentAttendanceDetailsArray", JSON.stringify(studentAttendanceDetailsArray));
};


//  if we need we can use this function to get the total count of present and absent students

function getTotalCount() {


    let getStudentAttendanceDetailsArray = JSON.parse(localStorage.getItem("studentAttendanceDetailsArray"));
    console.log(getStudentAttendanceDetailsArray);

    let pCount = 0;
    let aCount = 0;
    for (let i = 0; i < getStudentAttendanceDetailsArray.length; i++) {
        if (getStudentAttendanceDetailsArray[i].studDetails.presentTextContent === 1 && getStudentAttendanceDetailsArray[i].studDetails.absentTextContent === 0) {
            pCount = pCount + 1;
            
          
        } else {
            aCount = aCount + 1;
            
        };

    };
    document.getElementById("preCount").value = pCount;
    document.getElementById("absCount").value = aCount;


    setTimeout(function () {
        document.getElementById("preCount").value = "0";
        document.getElementById("absCount").value = "0";
    }, 10000);



    console.log(pCount);
    console.log(aCount);



};


