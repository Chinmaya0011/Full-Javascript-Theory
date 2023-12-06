/*
- Groups multiple values together in key-value pairs.
- Use {} to enclose properties.
- Example: {name: "Chinu"}
- Dot Notation: Use . operator to access values.
- Key Benefit: Organize related data under a single name.
*/

let student = {
    name: "Chinmaya",
    rollNo: 121203,
    college: "PMEC",
    books: ["math", "science"] // Renamed the property for clarity
  };
  
  console.log(student.college);
  console.log(student["name"]);
  console.log(typeof student);
  
  delete student.rollNo;
  console.log(student);
  