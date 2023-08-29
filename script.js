document.addEventListener("DOMContentLoaded", function() {
    const numButtons = document.querySelectorAll(".num-btn");
    const clearButton = document.getElementById("clear-btn");
    const temperatureInput = document.getElementById("temperatureInput");
    const convertButton = document.getElementById("convertButton");
    const resultDisplay = document.getElementById("resultDisplay");

    numButtons.forEach(button => {
        button.addEventListener("click", () => {
            temperatureInput.value += button.textContent;
        });
    });

    clearButton.addEventListener("click", () => {
        temperatureInput.value = "";
    });

    convertButton.addEventListener("click", () => {
        const temperature = parseFloat(temperatureInput.value);
        const unitSelect = document.getElementById("unitSelect").value;
        let convertedTemperature, convertedUnit;

        if (isNaN(temperature)) {
            resultDisplay.innerText = "Please enter a valid number.";
            return;
        }

        if (unitSelect === "celsius") {
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = "Fahrenheit";
        } else if (unitSelect === "fahrenheit") {
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = "Celsius";
        } else if (unitSelect === "kelvin") {
            convertedTemperature = temperature - 273.15;
            convertedUnit = "Celsius";
        }

        resultDisplay.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    });
});
