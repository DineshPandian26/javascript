const apiUrl = "https://dummyjson.com/users";

let employees = [];
let selectedDepartment = "All";

const employeeContainer = document.getElementById("employeeContainer");
const employeeCount = document.getElementById("employeeCount");
const totalSalary = document.getElementById("totalSalary");
const averageSalary = document.getElementById("averageSalary");
const highestEmployee = document.getElementById("highestEmployee");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");

function fetchEmployees() {

message.innerHTML = "Loading employees...";

fetch(apiUrl)
    .then(response => {

        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })
    .then(data => {

        employees = data.users.map(user => {

            const {
                firstName,
                lastName,
                age,
                email,
                phone,
                company,
                image,
                id
            } = user;

            let department = company.department;

            if (department === "Engineering") {
                department = "IT";
            }

            if (department === "Human Resources") {
                department = "HR";
            }

            if (
                department !== "IT" &&
                department !== "HR" &&
                department !== "Finance" &&
                department !== "Marketing"
            ) {
                const departments = ["IT", "HR", "Finance", "Marketing"];
                department = departments[id % departments.length];
            }

            const salary = 30000 + ((id * 7350) % 50001);

            return {
                id: id,
                name: firstName + " " + lastName,
                age: age,
                email: email,
                phone: phone,
                department: department,
                image: image,
                salary: salary
            };
        });

        setTimeout(() => {
            message.innerHTML = "Employee data loaded successfully.";
        }, 500);

        displayEmployees(employees);
    })
    .catch(error => {

        console.log(error);
        message.innerHTML = "Unable to load employee data.";
    })
    .finally(() => {

        console.log("API request completed");
    });

}

function displayEmployees(employeeList) {

employeeContainer.innerHTML = "";

if (employeeList.length === 0) {

    employeeContainer.innerHTML = `
        <div class="no-employees">
            <h3>No employees found</h3>
        </div>
    `;

    updateEmployeeCount(employeeList);
    calculateSalary(employeeList);

    return;
}

employeeList.forEach(employee => {

    const card = document.createElement("div");

    card.className = "employee-card";

    const image = document.createElement("img");

    image.setAttribute("src", employee.image);
    image.setAttribute("alt", employee.name);

    const name = document.createElement("h3");

    name.innerHTML = employee.name;

    const age = document.createElement("p");

    age.innerHTML = `Age: ${employee.age}`;

    const email = document.createElement("p");

    email.innerHTML = `Email: ${employee.email}`;

    const department = document.createElement("p");

    department.innerHTML = `Department: ${employee.department}`;

    const phone = document.createElement("p");

    phone.innerHTML = `Phone: ${employee.phone}`;

    const salary = document.createElement("p");

    salary.innerHTML =
        `Salary: ₹${employee.salary.toLocaleString("en-IN")}`;

    const deleteButton = document.createElement("button");

    deleteButton.setAttribute("type", "button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", () => {
        deleteEmployee(employee.id);
    });

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(email);
    card.appendChild(department);
    card.appendChild(phone);
    card.appendChild(salary);
    card.appendChild(deleteButton);

    employeeContainer.appendChild(card);
});

updateEmployeeCount(employeeList);
calculateSalary(employeeList);

}

function searchEmployees() {

applyFilters();

}

function filterDepartment(department) {

selectedDepartment = department;

applyFilters();

}

function applyFilters() {

const searchText = searchInput.value.toLowerCase().trim();

const filteredEmployees = employees.filter(employee => {

    const nameMatch =
        employee.name.toLowerCase().includes(searchText);

    const departmentMatch =
        selectedDepartment === "All" ||
        employee.department.toLowerCase() ===
        selectedDepartment.toLowerCase();

    return nameMatch && departmentMatch;
});

displayEmployees(filteredEmployees);

}

function addEmployee() {

const name = nameInput.value.trim();
const age = Number(ageInput.value);
const email = emailInput.value.trim();
const department = departmentInput.value;
const salary = Number(salaryInput.value);

errorMessage.innerHTML = "";

const isValid =
    validateEmployee(name, age, email, department, salary);

if (!isValid) {
    return;
}

const emailExists = employees.some(employee =>
    employee.email.toLowerCase() === email.toLowerCase()
);

if (emailExists) {

    errorMessage.innerHTML = "❌ Email already exists";

    return;
}

const newEmployee = {

    id: Date.now(),
    name: name,
    age: age,
    email: email,
    department: department,
    phone: "Not Available",
    image: "https://dummyjson.com/icon/100",
    salary: salary
};

employees = [...employees, newEmployee];

clearForm();

selectedDepartment = "All";

searchInput.value = "";

displayEmployees(employees);

message.innerHTML = "Employee added successfully.";

}

function validateEmployee(name, age, email, department, salary) {

const requiredFields = [
    name,
    email,
    department
];

const fieldsFilled =
    requiredFields.every(field => field !== "");

if (!fieldsFilled) {

    if (name === "") {

        errorMessage.innerHTML =
            "❌ Please enter employee name";

    } else if (email === "") {

        errorMessage.innerHTML =
            "❌ Please enter employee email";

    } else {

        errorMessage.innerHTML =
            "❌ Please select department";
    }

    return false;
}

if (isNaN(age) || age <= 18) {

    errorMessage.innerHTML =
        "❌ Age must be greater than 18";

    return false;
}

if (!email.includes("@")) {

    errorMessage.innerHTML =
        "❌ Please enter a valid email";

    return false;
}

if (isNaN(salary) || salary <= 0) {

    errorMessage.innerHTML =
        "❌ Please enter valid salary";

    return false;
}

return true;

}

function deleteEmployee(id) {

const employee =
    employees.find(employee => employee.id === id);

if (!employee) {
    return;
}

employees =
    employees.filter(employee => employee.id !== id);

applyFilters();

message.innerHTML =
    `${employee.name} deleted successfully.;`

}

function calculateSalary(employeeList) {

const total =
    employeeList.reduce(
        (sum, employee) => sum + employee.salary,
        0
    );

const average =
    employeeList.length > 0
        ? total / employeeList.length
        : 0;

totalSalary.innerHTML =
      `Total Salary: ₹${total.toLocaleString("en-IN")};`

averageSalary.innerHTML =
    `Average Salary: ₹${Math.round(average).toLocaleString("en-IN")};`

if (employeeList.length > 0) {

    const highest =
        employeeList.reduce((max, employee) =>
            employee.salary > max.salary
                ? employee
                : max
        );

    highestEmployee.innerHTML = `
        <h3>Highest Paid Employee 🏆</h3>
        <p>Name: ${highest.name}</p>
        <p>Salary: ₹${highest.salary.toLocaleString("en-IN")}</p>
    `;

} else {

    highestEmployee.innerHTML = "No salary data";
}

}

function updateEmployeeCount(employeeList) {

employeeCount.innerHTML =
    `Employee Count: ${employeeList.length};`

}

function sortEmployees(type) {

if (type === "name") {

    employees.sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}

if (type === "age") {

    employees.sort((a, b) =>
        a.age - b.age
    );
}

if (type === "salary") {

    employees.sort((a, b) =>
        b.salary - a.salary
    );
}

applyFilters();

}

function clearForm() {

nameInput.value = "";
ageInput.value = "";
emailInput.value = "";
departmentInput.value = "";
salaryInput.value = "";

errorMessage.innerHTML = "";

}

function updateDateTime() {

const now = new Date();

const date = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

let hours = now.getHours();

const minutes =
    String(now.getMinutes()).padStart(2, "0");

const seconds =
    String(now.getSeconds()).padStart(2, "0");

const period =
    hours >= 12 ? "PM" : "AM";

hours = hours % 12 || 12;

const dateTime =
    document.getElementById("dateTime");

dateTime.style.fontSize = "18px";

dateTime.innerHTML = `
    Today: ${date}/${month}/${year}
    <br>
    Time: ${hours}:${minutes}:${seconds} ${period}
`;

}

searchButton.addEventListener(
"click",
searchEmployees
);

searchInput.addEventListener(
"keyup",
searchEmployees
);

document.getElementById("allButton")
.addEventListener("click", () => filterDepartment("All"));

document.getElementById("itButton")
.addEventListener("click", () => filterDepartment("IT"));

document.getElementById("hrButton")
.addEventListener("click", () => filterDepartment("HR"));

document.getElementById("financeButton")
.addEventListener("click", () => filterDepartment("Finance"));

document.getElementById("marketingButton")
.addEventListener("click", () => filterDepartment("Marketing"));

document.getElementById("sortNameButton")
.addEventListener("click", () => sortEmployees("name"));

document.getElementById("sortAgeButton")
.addEventListener("click", () => sortEmployees("age"));

document.getElementById("sortSalaryButton")
.addEventListener("click", () => sortEmployees("salary"));

document.getElementById("addEmployeeButton")
.addEventListener("click", addEmployee);

fetchEmployees();

updateDateTime();

setInterval(updateDateTime, 1000);