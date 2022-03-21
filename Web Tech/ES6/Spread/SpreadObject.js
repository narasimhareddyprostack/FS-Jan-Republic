let user = { id: 101, name: "Rahul Gandhi", email: "rahul@gmail.com" }
let details = {
    salary: 45000,
    email: "rahul@tcs.com",
    loc: ["Bangalore", "Wayanad", "Noida"]
}

let user_Details = { ...user, ...details }
console.log(user_Details)