// Here I am settings the value of the constant variable kelvin to equal 293
const kelvin = 293;
// Here I am setting the value of the variable celsius to equal the kelvin value - 273
let celsius = kelvin - 273;
// Here I am using an equation to convert from celsius to fahrenheit I also used math.floor to round down the value
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// Extra Practice
let newton = Math.floor(celsius*(33/100));
console.log(`The temperature in newtons is ${newton}`);