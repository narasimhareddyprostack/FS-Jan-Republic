class Address {
    constructor(){
        console.log("Address Class Constructor")
    }
    get_Address() {
        console.log("Displaying Address info - Address Class")
    }
}
class Savings_Account extends Address {
    constructor() {
        super();
        console.log("Savings_Account Constructor - Executing")
    }
}

let c1 = new Savings_Account();
c1.get_Address()