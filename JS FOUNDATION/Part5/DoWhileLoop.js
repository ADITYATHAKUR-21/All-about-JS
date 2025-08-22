//  Do while loop

let allStudent = [];
let student;
do {
  student = prompt(`Enter students name (write Stop to finish)`)
  if (student !== "stop") {
    allStudent.push(student)

  }

} while (student !== "stop");

console.log(allStudent);

// 2nd

let total = 0;
let k = 1;

do {
  total += k
  k++
} while (k <= 3);

console.log(total);
