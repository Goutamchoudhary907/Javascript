const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`You want to convert temperature from:
    1. Celsius to Fahrenheit 
    2. Fahrenheit to Celsius`);

rl.question('Enter your choice (1 or 2): ', (choice) => {
    if (choice === '1') {
        rl.question('Enter temperature in Celsius: ', (temp) => {
            const result = celsiusToFahrenheit(parseFloat(temp));
            console.log(`Temperature in Fahrenheit: ${result}`);
            rl.close();
        });
    } else if (choice === '2') {
        rl.question('Enter temperature in Fahrenheit: ', (temp) => {
            const result = FahrenheitToCelsius(parseFloat(temp));
            console.log(`Temperature in Celsius: ${result}`);
            rl.close();
        });
    } else {
        console.log('Invalid choice. Please enter 1 or 2.');
        rl.close();
    }
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
