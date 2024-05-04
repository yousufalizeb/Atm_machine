#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 51418;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  }
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Select an option",
      type: "list",
      choices: ["Check balance", "Withdraw"]
    }
  ]);
  
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "list",
        choices: ["500", "1000", "5000", "10000"]
      }
    ]);
    myBalance -= parseInt(amountAns.amount); // Deduct the withdrawal amount
    console.log("Your remaining balance is " + myBalance);
  } else {
    console.log("Your current balance is " + myBalance);
  }
} else {
  console.log("Incorrect pin code");
}

