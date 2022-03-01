class Emp {
    emp_Id;
    emp_Name;
    esal;
    constructor(a, b, c) {
        this.emp_Id = a;
        this.emp_Name = b;
        this.esal = c;
    }
}
let e1 = new Emp(101, "Rahul Gandhi", 45000)
let e2 = new Emp(102, "Sonia Gandhi", 55000)
console.log(e1);
console.log(e2)