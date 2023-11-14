function convertTemperature() {
    const temperatureInput = document.getElementById('degree');
    const conversionSelect = document.getElementById('tempType');
    const resultElement = document.getElementById('results');

    const temperature = parseFloat(temperatureInput.value);
    const conversionType = conversionSelect.value;
    let result;

    switch(conversionType) {
        case 'celsius': result = `${((temperature - 32) * 5/9).toFixed(5)}°F`;
                        break;
        case 'fahrenheit': result = `${((temperature * 9/5) + 32).toFixed(5)}°C`;
                           break;
        case 'kelvin': result = `${((temperature - 273.15).toFixed(5))}°C`;
                       break;
        default: result = 'Invalid Conversion Type.';
    }
    resultElement.textContent = result;
}