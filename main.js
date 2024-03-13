// Assignment 8

// Answer 1
let character = prompt("Enter a character (number or string):");
let asciiCode = character.charCodeAt(0);
if (asciiCode >= 48 && asciiCode <= 57) {
    alert("The input '" + character + "' is a number.");
}
else if (asciiCode >= 65 && asciiCode <= 90) {
    alert("The input '" + character + "' is an uppercase letter.");
}
else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("The input '" + character + "' is a lowercase letter.");
}
else {
    alert("The input '" + character + "' is not a number or letter.");
}

// Answer 2
let firstInteger = parseInt(prompt("Enter the first integer:"));
let secondInteger = parseInt(prompt("Enter the second integer:"));
if (firstInteger === secondInteger) {
    alert("The two integers are equal.");
}
else {
    if (firstInteger > secondInteger) {
        alert("The larger integer is: " + firstInteger);
    } else {
        alert("The larger integer is: " + secondInteger);
    }
}

// Answer 3
// Taking input from user
let num = parseFloat(prompt("Enter a number: "));
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Answer 4
let char = prompt("Enter a character: ");
if (char.length === 1) {
    let vowels = "aeiouAEIOU";
    if (vowels.includes(char)) {
        console.log("True");
    } else {
        console.log("False");
    }
} else {
    console.log("Please enter a single character.");
}

// Answer 5
let correctPassword = "password123";
let userPassword = prompt("Enter your password: ");
if (userPassword === null || userPassword === "") {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

// Answer 6
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Answer 7
let time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm): "));
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
    console.log("Good evening!");
} else if (time >= 2000 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time format.");
}

