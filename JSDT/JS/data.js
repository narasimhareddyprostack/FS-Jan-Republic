var employees = [{ "id": 1, "first_name": "Marice", },
                 { "id": 2, "first_name": "Pascal" },
                ]


console.log(typeof (employees))

for (emp of employees) {
    console.log(emp.first_name)
}