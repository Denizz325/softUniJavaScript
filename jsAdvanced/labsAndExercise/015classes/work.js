class Company { 
    constructor() {
        this.departments = {};
    }

    
    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || salary < 0) {
            throw new error('Invalid input')
        }

        if (!this.departments[department]) {
            this.departments[department] = []
        }

        this.departments[department].push({name, position, salary});
        console.log(`New employee is hired. Name: ${name}. Position: ${position}`)

    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

