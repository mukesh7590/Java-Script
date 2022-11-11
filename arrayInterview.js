// We will look into the following Array Functions:

//     Array.isArray
//     map
//     filter
//     reduce

// ************************************** Array.isArray **************************************

let a = [1, 1, 2, 42];
let b = { name: "Manan" };
console.log(a instanceof Array); //true
console.log(b instanceof Array); //false

console.log(Array.isArray(a)); //true
console.log(Array.isArray(b)); //false

// ************************************** Array MAP **************************************

let employees = [
   {
      id: 11,
      name: "Abhinav",
      salary: 75000,
   },
   {
      id: 2131,
      name: "Raj",
      salary: 62000,
   },
   {
      id: 3012,
      name: "Raj",
      salary: 32000,
   },
];
let idsArray = [];
for (let i = 0; i < employees.length; i++) {
   idsArray.push(employees[i].id);
}
console.log("with simple loop => ", idsArray); //[11,2131,3012]

let result = employees.map((item, index) => {
   return item.id;
});

console.log("with MAP loop => ", result);

// ************************************** Array filter **************************************

const filterSalary = employees.filter((item, index) => {
   return item.salary > 40000;
});

console.log("filter salary => ", filterSalary);

// ************************************** Array Reduce **************************************

let totalSalary = employees.reduce((a, employee) => a + employee.salary, 2);
console.log("taotal salary => ", totalSalary);

let employeeWithHighest = employees.reduce(
   (a, employee) => ((a.salary || 0) > employee.salary ? a : employee),
   {}
);
console.log("Highest salary => ", employeeWithHighest);
