#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.96,
    GBP: 0.79,
    INR: 80.2,
    PKR: 295
};
let user = await inquirer.prompt([{
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "TO",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: 'number'
    }
]);
let fromAmount = currency[user.from];
let toAmount = currency[user.TO];
let amount = user.amount;
let baseAmount = amount / fromAmount; // usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
