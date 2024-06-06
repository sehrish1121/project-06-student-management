#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: " Select the course to enrolled",
        choices: ["HTML", "CSS", "JavaScript", "TypeScript", "Phyton"]
    }
]);
const tutionFee = {
    "HTML": 2000,
    "CSS": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Phyton": 10000
};
console.log(`\nTution fee: ${tutionFee[answer.course]}/-\n`);
console.log(`Balance:${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: " Select payment method",
        choices: ["Bank Transfar", "Easypaysa", "Jazcash"]
    },
    {
        name: "amount",
        type: "input",
        message: " Transfar Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(` Congratulation, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: " What would you like tp do next",
            choices: ["View status", "Exit"]
        }
    ]);
    if (ans.select === "View status") {
        console.log("\n ---- satus------\n");
        console.log(`Student Nmae: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`Tution fees paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting student management system\n");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
