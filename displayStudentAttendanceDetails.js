const studentAttendanceDetailsArray=JSON.parse(localStorage.getItem("studentAttendanceDetailsArray"));
console.log(studentAttendanceDetailsArray);

let aDate=document.getElementById("aDate");

aDate.addEventListener("input",function(){
let getDate=aDate.value;
console.log(getDate);
checkDate(getDate);
});

function checkDate(getDate){


   let content=document.getElementById("content");
   content.innerHTML="";

   for(let i=0;i<studentAttendanceDetailsArray.length;i++){
    if(getDate == studentAttendanceDetailsArray[i].attendanceDate){
       console.log(studentAttendanceDetailsArray[i].studDetails.sName);

       let row=document.createElement("div");
       row.className="row";

      
       
   let col1=document.createElement("div");
   col1.className="col";
   col1.textContent=`${studentAttendanceDetailsArray[i].studDetails.sName}`;

   let col2=document.createElement("div");
   col2.className="col ";

   let button=document.createElement("button");
   button.className="btn btn-success";
   button.id="btnPresent";
   button.textContent="PRESENT";

   col2.appendChild(button);
   
   row.appendChild(col1);
   row.appendChild(col2);
   
   
   content.appendChild(row);


   if(studentAttendanceDetailsArray[i].studDetails.presentTextContent === 0){
      console.log(button.classList);
      button.classList.remove("btn-success");
      console.log(button.classList);
      button.classList.add("btn-danger");
      console.log(button.textContent);
      button.textContent="ABSENT";
   }

    };
   }
   
  
};

function updateStatus(){

};
