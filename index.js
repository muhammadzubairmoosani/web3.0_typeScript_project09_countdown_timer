import inquirer from "inquirer";
const countdown = async (count) => {
    if (count > 0) {
        console.log(`Time remaining: ${count} seconds`);
        setTimeout(() => {
            countdown(count - 1);
        }, 1000);
    }
    else {
        console.log("Time's up!");
    }
};
console.log("Welcome to the countdown timer!");
const { timer } = await inquirer.prompt([
    {
        type: "number",
        name: "timer",
        message: "Enter the countdown time in seconds",
    },
]);
countdown(timer);
