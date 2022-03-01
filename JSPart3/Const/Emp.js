class Emp {
    constructor(a, b, c) {
        this.emp_Id = a;
        this.emp_Name = b;
        this.esal = c;
    }
    get_Emp_Details() {
        console.log("Emp Name:", this.emp_Name)
    }
}
let e1 = new Emp(101, "Rahul Gandhi", 45000)
let e2 = new Emp(102, "Sonia Gandhi", 55000)
console.log(e1);
console.log(e2)
e1.get_Emp_Details()
e2.get_Emp_Details()