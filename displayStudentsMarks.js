
let studentMarksDetailsArray=JSON.parse(localStorage.getItem("studentMarksDetailsArray"));
console.log(studentMarksDetailsArray);



window.onload=function(){
    addMarksToHtmlContent();
};

function addMarksToHtmlContent(){
for( let i=0;i<studentMarksDetailsArray.length;i++){

    let mainContent=document.getElementById("mainContent");

    let row=document.createElement("div");
    row.className="row";

    let col1=document.createElement("div");
    col1.className="col col-1";
    col1.textContent=`${i+1}`;

    let col2=document.createElement("div");
    col2.className="col col-2";
    col2.textContent=`${studentMarksDetailsArray[i].sname}`;

    let col3=document.createElement("div");
    col3.className="col col-2";
    col3.textContent=`${studentMarksDetailsArray[i].sRegisterNo}`;
//   total content of col4
    let col4=document.createElement("div");
    col4.className="col col4 ";
    //  inner content of col4
    let row1=document.createElement("div");
    row1.className="row";
     
    let co1=document.createElement("div");
    co1.className="col";
    co1.textContent=`${studentMarksDetailsArray[i].sMarks.tamilMark}`;

    let co2=document.createElement("div");
    co2.className="col";
    co2.textContent=`${studentMarksDetailsArray[i].sMarks.englishMark}`;

    let co3=document.createElement("div");
    co3.className="col";
    co3.textContent=`${studentMarksDetailsArray[i].sMarks.mathsMark}`;

    let co4=document.createElement("div");
    co4.className="col";
    co4.textContent=`${studentMarksDetailsArray[i].sMarks.scienceMark}`;

    let co5=document.createElement("div");
    co5.className="col";
    co5.textContent=`${studentMarksDetailsArray[i].sMarks.socialScienceMark}`;
  
    row1.appendChild(co1);
    row1.appendChild(co2);
    row1.appendChild(co3);
    row1.appendChild(co4);
    row1.appendChild(co5);

    col4.appendChild(row1);

    // inner content end of col4

    let col5=document.createElement("div");
    col5.className="col col-1";
    col5.textContent=`${studentMarksDetailsArray[i].totalMark}`;
      
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    mainContent.appendChild(row);
}
};


