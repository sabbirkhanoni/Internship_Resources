const students = [
  "Rahim",
  "Karim",
  "Jamal"
];

let result = [];

for (let student of students) {
  result.push(student.toUpperCase());
}

console.log(result);