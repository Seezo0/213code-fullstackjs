let mode = +prompt("Choose conversion:\n1: Celsius to Fahrenheit\n2: Fahrenheit to Celsius");

if (mode === 1) {

    let temperature;
    temperature = +prompt("Enter the temperature (Celsius): ");
    
    function convertToFahrenheit() {
        let conversion;
        conversion = (temperature * 1.8) + 32;
        console.log(conversion.toFixed(2) + "°F");
    };
    convertToFahrenheit();

} else if (mode === 2) {

    let temperature;
    temperature = +prompt("Enter the temperature (Fahrenheit): ");
    
    function convertToCelsius() {
        let conversion;
        conversion = (temperature - 32) * (5 / 9)
        console.log(conversion.toFixed(2) + "°C");
    };
    convertToCelsius();

};