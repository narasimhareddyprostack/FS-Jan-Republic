let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }
]
let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            employees.push(emp);
            flag ? resolve("Successfully inserted") : reject("Failed - success")
        }, 3000);
    });
}
let getEmployee = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee) => {
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                           </tr>`
        });
        document.getElementById('tbody-data').innerHTML = rows
    }, 1000)
}

let run = async () => {
    await createEmployee({ id: 103, name: "priyanka", sal: 65000 });
    getEmployee();
}
run();
