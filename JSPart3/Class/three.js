class Savings_Account {
    min_Bal = 5000;
    open_Account() {
        console.log("Account Opened Successfully")
    }
    get_Min_Bal() {
        console.log("Your Min Balance is : 5000");
    }
}
let c1 = new Savings_Account()
let c2 = new Savings_Account()
console.log(c1.min_Bal);
c1.open_Account()
c1.get_Min_Bal()