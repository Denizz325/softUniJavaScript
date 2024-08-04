let numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b) {
  return a - b;
  console.log(numbers);
});

console.log(numbers); // [1, 2, 3, 4, 5]




// class Company { 
//     constructor() {
//         this.departments = {};
//     }

    
//     addEmployee(name, salary, position, department) {
//         if (!name || !position || !department || salary < 0) {
//             throw new error('Invalid input')
//         }

//         if (!this.departments[department]) {
//             this.departments[department] = []
//         }

//         this.departments[department].push({name, position, salary});
//         console.log(`New employee is hired. Name: ${name}. Position: ${position}`)

//     }

//     bestDepartment() {
//         let currentBest = {
//             name: '',
//             salary: 0
//         };

//         for (let depKey in this.departments) { 
//             let avgSalary = 0;

//             for (let empKey in this.departments[depKey]) {
//                 avgSalary += this.departments[depKey][empKey].salary;
//             }

//             avgSalary = avgSalary / this.departments[depKey].length;

//             if(currentBest.salary < avgSalary) {
//                 currentBest.name = depKey;
//                 currentBest.salary = avgSalary
//             }
//         }


//     }


// }


// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());
