#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please Guess a Number Between 1 to 6 = ",
        type: "number",
        name: "userguessednumber",
    },
]);
if (answer.userguessednumber === randomnumber) {
    console.log("Congratulation! you Guessed a Right Number");
}
else {
    console.log("Sorry you Guessed a Wrong Number ");
    console.log("TRY AGAIN");
}
