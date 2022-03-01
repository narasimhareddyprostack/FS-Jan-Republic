class Parent {
    assets = '10 CR'
    good_Qulities() {
        console.log("Parent class - Good Qualites")
    }
}
class Child extends Parent {
    bad_Qalities() {
        console.log("Child Class - Bad Qaulties")
    }
}
let c1 = new Child()
console.log(c1.assets);
c1.good_Qulities()
c1.bad_Qalities()
