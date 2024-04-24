// Write your solution in this file!
// Initialize the employee object with name and street address
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Function to non-destructively update employee with a new key and value
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to destructively update employee with a new key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to non-destructively delete a key from the employee
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to destructively delete a key from the employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Example usage:
console.log("Original:", employee);

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'email', 'john.doe@example.com');
console.log("Updated non-destructively:", updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'phone', '555-1234');
console.log("Updated destructively:", employee);

let prunedEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log("Pruned non-destructively:", prunedEmployee);

destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log("Pruned destructively:", employee);
