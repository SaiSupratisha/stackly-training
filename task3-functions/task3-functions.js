// ==========================================
// TASK 3 - JAVASCRIPT FUNCTIONS
// ==========================================


// ==========================================
// 1. Function Declaration
// ==========================================

// Function declaration
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Calling the function
const sum = addNumbers(10, 20);

console.log("1. Function Declaration");
console.log("Sum =", sum);


// ==========================================
// 2. Function with Parameters & Return Value
// ==========================================

function calculateArea(length, width) {
    return length * width;
}

const length = 10;
const width = 5;

const area = calculateArea(length, width);

console.log("\n2. Function with Parameters & Return Value");
console.log("Length =", length);
console.log("Width =", width);
console.log("Area =", area);


// ==========================================
// 3. Function Expression
// ==========================================

const greetUser = function (name) {
    return `Welcome ${name}!`;
};

console.log("\n3. Function Expression");
console.log(greetUser("John"));


// ==========================================
// 4. Arrow Function - Basic
// ==========================================

const multiplyNumbers = (num1, num2) => {
    return num1 * num2;
};

const multiplicationResult = multiplyNumbers(4, 5);

console.log("\n4. Arrow Function - Basic");
console.log("Result =", multiplicationResult);


// ==========================================
// 5. Arrow Function - Multiple Parameters
// ==========================================

const getUserInfo = (name, age) => {
    return `${name} is ${age} years old`;
};

console.log("\n5. Arrow Function - Multiple Parameters");
console.log(getUserInfo("John", 25));


// ==========================================
// 6. Arrow Function with Array
// ==========================================

const numbers = [10, 20, 30, 40, 50];

const calculateTotal = (numbersArray) => {
    let total = 0;

    numbersArray.forEach((number) => {
        total += number;
    });

    return total;
};

const total = calculateTotal(numbers);

console.log("\n6. Arrow Function with Array");
console.log("Total =", total);


// ==========================================
// 7. map() with Arrow Function
// ==========================================

const users = [
    { name: "John", age: 25 },
    { name: "David", age: 30 },
    { name: "Sam", age: 20 }
];

const userNames = users.map((user) => {
    return user.name;
});

console.log("\n7. map() with Arrow Function");
console.log(userNames);


// ==========================================
// 8. filter() with Arrow Function
// ==========================================

const olderUsers = users.filter((user) => {
    return user.age > 25;
});

console.log("\n8. filter() with Arrow Function");
console.log(olderUsers);


// ==========================================
// 9. find() with Arrow Function
// ==========================================

const david = users.find((user) => {
    return user.name === "David";
});

console.log("\n9. find() with Arrow Function");
console.log(david);


// ==========================================
// 10. forEach() with Arrow Function
// ==========================================

console.log("\n10. forEach() with Arrow Function");

users.forEach((user) => {
    console.log(`${user.name} - ${user.age}`);
});


// ==========================================
// 11. Callback Function
// ==========================================

const processUser = (name, callback) => {
    console.log(`Processing user: ${name}`);

    // Execute the callback function
    callback();
};

processUser("John", () => {
   console.log("User processing completed")
});


// ==========================================
// 12. Promise
// ==========================================

// Create a Promise
const userDataPromise = new Promise((resolve, reject) => {

    // Simulate server response after 2 seconds
    setTimeout(() => {
        resolve("User data received successfully");
    }, 2000);

});

// Handle the Promise result
userDataPromise
    .then((result) => {
        console.log("\n12. Promise");
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// ==========================================
// 13. Async/Await - IMPORTANT
// ==========================================

const getUser = async () => {

    try {
        console.log("\n13. Async/Await");
        console.log("Fetching user data...");

        // Wait for the Promise to complete
        const result = await userDataPromise;

        console.log(result);

    } catch (error) {
        console.log("Error:", error);
    }
};

// Call the async function
getUser();