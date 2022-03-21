class Customer {
    constructor(a, b) {
        this.houseNo = a;
        this.city = b;
    }
    //
}
class Savings_Account extends Customer {
    constructor(id, name, amount, houseNo, city) {
        super(houseNo, city);
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
}
let c1 = new Savings_Account(101, "Rahul Gandhi", 5000, 96, "Bangalore");
console.log(c1)