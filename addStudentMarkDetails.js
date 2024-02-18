

let addMarksButton=document.getElementById("addMarksButton");

function addStudentMarks(event){

    event.preventDefault();

    let sName=document.getElementById("sName").value;
    let sRegisterNo=document.getElementById("sRegisterNo").value;
    let tamilMark=document.getElementById("tamilMark").value;
    let englishMark=document.getElementById("englishMark").value;
    let mathsMark=document.getElementById("mathsMark").value;
    let scienceMark=document.getElementById("scienceMark").value;
    let socialScienceMark=document.getElementById("socialScienceMark").value;

    let totalMark=document.getElementById("totalMark").value;
    console.log(totalMark);

    const studentMarksDetailsArray=JSON.parse(localStorage.getItem("studentMarksDetailsArray")) || [];

    const studentMarksDetailsObject={
      sname:sName,
      sRegisterNo:sRegisterNo,
      
      sMarks:{
        tamilMark:tamilMark,
       englishMark:englishMark,
       mathsMark:mathsMark,
       scienceMark:scienceMark,
       socialScienceMark:socialScienceMark
      },
      totalMark:totalMark
        
      
    };

    studentMarksDetailsArray.push(studentMarksDetailsObject);

    localStorage.setItem("studentMarksDetailsArray",JSON.stringify(studentMarksDetailsArray));
};


let totalMark;
function totalMarks(event){
  event.preventDefault();

  let tamilMark=parseFloat(document.getElementById("tamilMark").value);
  let englishMark=parseFloat(document.getElementById("englishMark").value);
  let mathsMark=parseFloat(document.getElementById("mathsMark").value);
  let scienceMark=parseFloat(document.getElementById("scienceMark").value);
  let socialScienceMark=parseFloat(document.getElementById("socialScienceMark").value);

   totalMark=tamilMark+englishMark+mathsMark+scienceMark+socialScienceMark;

  document.getElementById("totalMark").value = totalMark;

  

};

let getTotal = document.getElementById("getTotal");
getTotal.addEventListener("click", totalMarks);


