class Savings_Account {
    min_Bal = 500;
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount
    }
    open_Acc() { }
    deposit() { }
    withdraw() { }
    get_Bal() {
        return this.amount - this.min_Bal
    }
    get_Statement() { }
    close_Acc() { }
}
let c1 = new Savings_Account(101, "Rahul Gandhi", 500000);
let c2 = new Savings_Account(102, "Sonia Gandhi", 5000000);
console.log(c1.get_Bal())
console.log(c2.get_Bal())