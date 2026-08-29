//console.log("Hello");

// let marks = 40;

// if (marks>=80) {
//     console.log("Distinction");
// }
// else if (marks>=50) {
//     console.log("C");
// }
// else {
//     console.log("Fail");
// }

// const num1 = ["Ram", "Shyam"];
// const num2 = [...num1, "Sita"];

// console.log(num2);

// let markss = [80,75,90,45];
// let sum = 0;

// for (let i = 0; i < markss.length; i++) {
//     sum += markss[i];
// }

// let average = sum / markss.length;

// console.log(sum);
// console.log("Average Marks:", average);

// function calcAvg(sub1, sub2, sub3, sub4, sub5) {
//     let total = sub1 + sub2 + sub3 + sub4 + sub5;
//     return total / 5;
// }

// let avg = calcAvg(85, 90, 78, 92, 88);
// console.log("Average Marks:", avg); 

let marks = [80, 75, 90, 65, 95];

function calculateTotal(marks) {
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  return total;
}

function calculateAverage(total, length) {
  return total / length;
}

function getGrade(average) {
  if (average >= 80) {
    return "A";
  } else if (average >= 60) {
    return "B";
  } else if (average >= 40) {
    return "C";
  } else {
    return "Fail";
  }
}

let totalMarks = calculateTotal(marks);

let average = calculateAverage(totalMarks, marks.length);

let grade = getGrade(average);

console.log("Total Marks:", totalMarks);
console.log("Average:", average);
console.log("Grade:", grade);

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim(); 
    const email = document.getElementById("email").value.trim(); 
    const password = document.getElementById("password").value.trim(); 
    const message = document.getElementById("message");

    if (username === "") {
        message.innerText = "please enter username";
        message.style.color = "red";
    }

    if (email === "") {
        message.innerText = "please enter Email";
        message.style.color = "red";
    }

    if (password === "") {
        message.innerText = "Please enter password";
        message.style.color = "red";
    }
});

// const form = document.getElementById("registrationForm");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const username = document.getElementById("username").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value.trim();
//   const message = document.getElementById("message");

//   if (username === "") {
//     message.innerText = "please enter Username";
//     message.style.color = "red";
//   }

//   if (email === "") {
//     message.innerText = "please enter Email";
//     message.style.color = "red";
//   }
//   if (password === "") {
//     message.innerText = "please enter Password";
//     message.style.color = "red";
//   }
// });