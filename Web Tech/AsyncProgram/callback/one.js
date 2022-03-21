let calc = (a, b, operation) => {
    if (operation == "sum") {
        return a + b
    }
    if (operation == "multi") {
        return a * b
    }
}

let r1 = calc(10, 20, "sum");
let r2 = calc(10, 20, "multi")
console.log(r1)
console.log(r2)