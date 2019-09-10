// EXERCÍCIO 2 a)

const fahrenheit = prompt("Qual o valor em Fahrenheit?");

const fahrEmKelvin = (fahrenheit - 32) * 5/9 + 273.15;
console.log("Kelvin: "+ fahrEmKelvin);

const fahrEmCelsius = (fahrenheit - 32) * 5/9;
console.log("Celsius: "+ fahrEmCelsius);