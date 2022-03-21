let user = { name: "Rahul", password: "123456789" }

let new_password = 'dsfjkkasfjsafjasl; fkasl.saflkajl; ksd';


user = { ...user, password: new_password }
console.log(user)