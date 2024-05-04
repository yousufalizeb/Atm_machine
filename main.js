import inquirer from "inquirer";
let myBlance = 10000; //Dollar
let myPin = 51418;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin  code ");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "select an option ",
            type: "list",
            choices: ["check balance", "withdraw"]
        }]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "list",
                choices: ["500", "1000", "5000", "10000"]
            }]);
        if ()
            myBlance -= amountAns.amount;
        console.log("your remainig balance is " + myBlance);
    }
    else {
        console.log("your current balce is " + myBlance);
    }
}
else {
    console.log("pin code incorrect ");
}
;
