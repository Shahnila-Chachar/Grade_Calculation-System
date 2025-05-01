let myMarks = document.getElementById('my-Marks');
let totalMarks = document.getElementById('total-Marks');
let resGrade = document.getElementById('my-Grade');

function myFunction() {
    
    resGrade.innerHTML = "";
    
  let obtained = Number(myMarks.value);
  let total = Number(totalMarks.value);

  if (total <= 0 || obtained < 0 || obtained > total) {
    resGrade.innerHTML = "Invalid Input";
      resGrade.style.color = "red";
      resGrade.style.fontSize = "12px";
    return;
  }

  let percentage = (obtained / total) * 100;
  let grade = "";

  if (percentage >= 80 && percentage <= 100) {
    grade = "A1";
  } else if (percentage >= 70 && percentage < 80) {
    grade = "A";
  } else if (percentage >= 60 && percentage < 70) {
    grade = "B";
  } else if (percentage >= 50 && percentage < 60) {
    grade = "C";
  } else if (percentage >= 40 && percentage < 50) {
    grade = "D";
  } else {
    grade = "Fail";
  }

  resGrade.innerHTML = `Grade: ${grade} (${percentage.toFixed(2)}%)`;
    resGrade.style.color = "";
      resGrade.style.fontSize = "25px";
    
}


function resetFields() {
  myMarks.value = "";
  totalMarks.value = "";
  resGrade.innerHTML = "";
}

