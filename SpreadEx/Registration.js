const bcrypt = require('bcryptjs')

let user = { cc: "444455556666777", name: "Rahul", email: "rahul@gmail.com", password: "123abc" }


let salt = bcrypt.genSaltSync(10);
let new_Password = bcrypt.hashSync(user.password, salt);
let new_Email = bcrypt.hashSync(user.email, salt)
let new_CC = bcrypt.hashSync(user.cc, salt)
console.log(user)
let new_User = { ...user, cc: new_CC, email: new_Email, password: new_Password }
console.log(new_User)

let flag = bcrypt.compareSync("hello123", new_User.password)

flag ? console.log("Login Success") : console.log("Failed")